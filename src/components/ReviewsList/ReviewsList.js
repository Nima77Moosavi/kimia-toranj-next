"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import styles from "./ReviewsList.module.css";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await axiosInstance.get("/api/store/reviews/");
      setReviews(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("خطا در دریافت دیدگاه‌ها");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) {
    return <div className={styles.message}>در حال بارگذاری...</div>;
  }

  if (error) {
    return (
      <div className={styles.messageError}>
        {error}
        <button onClick={fetchReviews} className={styles.retryButton}>
          تلاش مجدد
        </button>
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className={styles.emptyMessage}>
        دیدگاهی ثبت نشده است.
        <a href="/shop" className={styles.ctaLink}>
          رفتن به فروشگاه
        </a>
      </div>
    );
  }

  return (
    <div className={styles.reviews}>
      <h3 className={styles.title}>دیدگاه‌های شما</h3>
      <ul className={styles.list}>
        {reviews.map((rev) => (
          <li key={rev.id} className={styles.item}>
            <div>
              <strong>محصول:</strong> {rev.product_title || rev.product}
            </div>
            <div>
              <strong>امتیاز:</strong>{" "}
              <span className={styles.rating}>{rev.rating} ★</span>
            </div>
            <div>
              <strong>دیدگاه:</strong> {rev.content}
            </div>
            <div className={styles.date}>
              {new Date(rev.created_at).toLocaleDateString("fa-IR")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
