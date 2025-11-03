"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./login.module.css";
import { API_URL } from "@/config/config";
import axios from "axios";

export default function LoginContent() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(90);

  const router = useRouter();
  const codeInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get("next") || "/";

  useEffect(() => {
    if (isCodeSent && codeInputRef.current) {
      codeInputRef.current.focus();
    }
  }, [isCodeSent]);

  useEffect(() => {
    if (!isCodeSent && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [isCodeSent]);

  useEffect(() => {
    let interval;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setError("");
  };

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
    setError("");
  };

  const handleLoginClick = async () => {
    if (!phoneNumber) {
      setError("لطفا شماره موبایل را وارد کنید");
      return;
    }
    if (phoneNumber.length !== 11 || !phoneNumber.startsWith("09")) {
      setError("شماره موبایل باید 11 رقمی و با 09 شروع شود");
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(`${API_URL}api/users/send-otp/`, {
        phone_number: phoneNumber,
      });
      setIsCodeSent(true);
      setTimer(90);
      setError("");
    } catch {
      setError("خطا در ارسال کد تأیید");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setError("لطفا کد تأیید را وارد کنید");
      return;
    }
    if (verificationCode.length !== 6) {
      setError("کد تأیید باید 6 رقمی باشد");
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(`${API_URL}api/users/verify-otp/`, {
        phone_number: phoneNumber,
        code: verificationCode,
      });
      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("refreshToken", res.data.refresh);
      setIsVerified(true);
      setError("");
      router.replace(nextUrl);
    } catch {
      setError("کد تأیید نادرست است");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditPhone = () => {
    setIsCodeSent(false);
    setVerificationCode("");
    setError("");
    setTimer(90);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <Image
            src="/logo2.png"
            alt="لوگو"
            className={styles.logoImage}
            width={120}
            height={120}
          />
        </div>

        <p className={styles.welcome}>
          سلام به{" "}
          <span className={styles.brand} onClick={() => router.push("/")}>
            کیمیا ترنج
          </span>{" "}
          خوش آمدید
        </p>

        {isVerified ? (
          <>
            <p className={styles.instruction}>ورود شما موفقیت‌آمیز بود</p>
            <button className={styles.button} onClick={() => router.push("/")}>
              ادامه خرید
            </button>
            <button
              className={styles.buttonSecondary}
              onClick={() => router.push("/user-panel")}
            >
              نمایش پنل کاربری
            </button>
          </>
        ) : (
          <>
            <p className={styles.instruction}>
              {!isCodeSent
                ? "لطفا شماره موبایل خود را وارد کنید"
                : "کد تأیید ارسال شده را وارد کنید"}
            </p>

            {error && <div className={styles.error}>{error}</div>}

            {!isCodeSent ? (
              <>
                <input
                  type="tel"
                  placeholder="مثال: 09123456789"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={styles.input}
                  maxLength="11"
                  ref={phoneInputRef}
                  autoFocus
                />
                <button
                  className={styles.button}
                  onClick={handleLoginClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className={styles.spinner}></span>
                  ) : (
                    "دریافت کد تأیید"
                  )}
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="کد 6 رقمی"
                  value={verificationCode}
                  onChange={handleCodeChange}
                  className={styles.input}
                  maxLength="6"
                  autoFocus
                  ref={codeInputRef}
                />
                <button
                  className={styles.button}
                  onClick={handleVerifyCode}
                  disabled={isLoading}
                >
                  {isLoading ? "در حال بررسی..." : "تایید و ورود"}
                </button>
                {timer > 0 ? (
                  <p className={styles.timer}>ارسال مجدد کد: {timer} ثانیه</p>
                ) : (
                  <button className={styles.button} onClick={handleLoginClick}>
                    ارسال مجدد کد
                  </button>
                )}
                <p className={styles.editPhone} onClick={handleEditPhone}>
                  ویرایش شماره موبایل
                </p>
              </>
            )}
          </>
        )}

        <p className={styles.terms}>
          ورود شما به معنای پذیرش{" "}
          <a href="/terms" className={styles.link}>
            شرایط و قوانین
          </a>{" "}
          کیمیا ترنج است
        </p>
      </div>
    </div>
  );
}
