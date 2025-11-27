"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import styles from "./CheckoutPage.module.css";

export const metadata = {
  title: "فروشگاه کیمیا ترنج | صنایع دستی اصفهان ",
  description:
    "خرید صنایع دستی اصیل اصفهان و ایران؛ خاتم‌کاری، قلم‌زنی، مینیاتور، سماور برنجی، پک هدیه سازمانی و محصولات دست‌ساز با کیفیت.",
};

export default function CheckoutPage() {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelected] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalCode: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
    province: "",
    city: "",
  });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔹 Load profile + addresses
  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const response = await axiosInstance.get("api/store/customer/me/");
        if (!isMounted) return;

        const data = response.data;

        let day = "",
          month = "",
          year = "";
        if (data.birth_date) {
          const [y, m, d] = data.birth_date.split("-");
          year = String(Number(y) - 621);
          month = String(Number(m));
          day = String(Number(d));
        }

        setFormData({
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          nationalCode: data.national_id || "",
          birthDay: day,
          birthMonth: month,
          birthYear: year,
          gender: data.gender || "",
          province: data.province || "",
          city: data.city || "",
        });
      } catch (err) {
        const msg =
          err.response?.data?.detail ||
          err.response?.data?.error ||
          err.message;
        if (isMounted) setError(msg);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    async function fetchAddresses() {
      try {
        const { data } = await axiosInstance.get(
          "/api/store/shipping-addresses/"
        );
        if (isMounted) setAddresses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        if (isMounted) setError("خطا در بارگذاری آدرس‌ها");
      }
    }

    loadProfile();
    fetchAddresses();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!formData.firstName || !formData.lastName || !formData.nationalCode) {
      setError("لطفاً فیلدهای ستاره‌دار را پر کنید.");
      return;
    }
    if (!selectedAddressId) {
      setError("لطفاً یک آدرس انتخاب کنید");
      return;
    }

    const isoBirth =
      formData.birthYear && formData.birthMonth && formData.birthDay
        ? `${Number(formData.birthYear) - 621}`.padStart(4, "0") +
          `-${String(formData.birthMonth).padStart(2, "0")}` +
          `-${String(formData.birthDay).padStart(2, "0")}`
        : null;

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      national_id: formData.nationalCode,
      birth_date: isoBirth,
      gender: formData.gender,
      province: formData.province,
      city: formData.city,
    };

    setSaving(true);
    try {
      // 🔹 Update customer profile first
      await axiosInstance.patch("api/store/customer/me/", payload);

      // 🔹 Then create order + request ZarinPal payment
      const { data } = await axiosInstance.post(
        "/api/store/orders/create-pay/",
        {
          shipping_address_id: selectedAddressId,
          first_name: formData.firstName,
          last_name: formData.lastName,
        }
      );

      setSuccess("اطلاعات با موفقیت بروزرسانی شد.");
      window.location.href = data.pay_url;
    } catch (err) {
      const serverMsg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        err.message;
      setError(serverMsg);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.checkoutPage}>
      <h2>تأیید نهایی سفارش</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className={styles.inputGroup}>
          <label>
            نام <span className={styles.required}>*</span>
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.firstName && !formData.firstName ? styles.error : ""
            }
          />
          {touched.firstName && !formData.firstName && (
            <div className={styles.errorMessage}>این فیلد الزامی است</div>
          )}
        </div>

        {/* Last Name */}
        <div className={styles.inputGroup}>
          <label>
            نام خانوادگی <span className={styles.required}>*</span>
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.lastName && !formData.lastName ? styles.error : ""
            }
          />
          {touched.lastName && !formData.lastName && (
            <div className={styles.errorMessage}>این فیلد الزامی است</div>
          )}
        </div>

        {/* National Code */}
        <div className={styles.inputGroup}>
          <label>
            کد ملی <span className={styles.required}>*</span>
          </label>
          <input
            name="nationalCode"
            value={formData.nationalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.nationalCode && !formData.nationalCode
                ? styles.error
                : ""
            }
          />
          {touched.nationalCode && !formData.nationalCode && (
            <div className={styles.errorMessage}>این فیلد الزامی است</div>
          )}
        </div>

        {/* Address Selection */}
        {addresses.length === 0 ? (
          <Link href="/user-panel/addresses">
            <button type="button">افزودن آدرس جدید</button>
          </Link>
        ) : (
          <ul className={styles.addressList}>
            {addresses.map((addr) => (
              <li key={addr.id}>
                <label>
                  <input
                    type="radio"
                    name="selectedAddress"
                    value={addr.id}
                    checked={selectedAddressId === addr.id}
                    onChange={() => setSelected(addr.id)}
                  />
                  {addr.state}، {addr.city}، {addr.address}
                </label>
              </li>
            ))}
          </ul>
        )}

        <button type="submit" disabled={saving || loading}>
          {saving ? "در حال ذخیره و انتقال…" : "پرداخت و ثبت سفارش"}
        </button>
      </form>
    </div>
  );
}
