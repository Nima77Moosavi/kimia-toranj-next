"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./Khatamkari.module.css";
import FooterMenu from "@/components/FooterMenu/FooterMenu";
import Link from "next/link";
import { useEffect, useState } from "react";

const API_URL = "https://api.kimiatoranj.com/";

export default function KhatamkariPage() {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesRes = await fetch(
          `${API_URL}api/store/collections/`
        );

        if (categoriesRes.ok) {
          const categoriesData = await categoriesRes.json();
          const khatamCategory = categoriesData.find(
            cat => cat.title === "خاتم کاری" || cat.landing_page_url === "khatamkari"
          );
          const subs = khatamCategory?.subcollections || [];
          
          if (subs.length === 0) {
            setSubcategories([
              {
                "id": 12,
                "title": "ساعت خاتم کاری",
                "landing_page_url": "saatkhatamkari"
              },
              {
                "id": 13,
                "title": "شکلاتخوری خاتم",
                "landing_page_url": "shokolatkhori"
              },
              {
                "id": 14,
                "title": "سایر محصولات خاتم",
                "landing_page_url": "others"
              }
            ]);
          } else {
            setSubcategories(subs);
          }
        }
      } catch (error) {
        console.error('Error:', error);
        setSubcategories([
          {
            "id": 12,
            "title": "ساعت خاتم کاری",
            "landing_page_url": "saatkhatamkari"
          },
          {
            "id": 13,
            "title": "شکلاتخوری خاتم",
            "landing_page_url": "shokolatkhori"
          },
          {
            "id": 14,
            "title": "سایر محصولات خاتم",
            "landing_page_url": "others"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  // تابع برای دریافت تصویر واقعی
  const getImageUrl = (title) => {
    const images = {
      "ساعت خاتم کاری": "/images/clock-khatam.webp",
      "شکلاتخوری خاتم": "/images/chocolate-khatam.webp",
      "سایر محصولات خاتم": "/images/other-khatam.webp"
    };
    return images[title] || "/images/default-khatam.webp";
  };

  // تابع برای هندل کردن خطای تصویر
  const handleImageError = (e) => {
    const title = e.target.alt;
    const fallbackImages = {
      "ساعت خاتم کاری": "https://via.placeholder.com/300x240/4a7c59/ffffff?text=ساعت+خاتم",
      "شکلاتخوری خاتم": "https://via.placeholder.com/300x240/2c5530/ffffff?text=شکلاتخوری",
      "سایر محصولات خاتم": "https://via.placeholder.com/300x240/023047/ffffff?text=سایر+محصولات"
    };
    e.target.src = fallbackImages[title] || "https://via.placeholder.com/300x240/666666/ffffff?text=خاتم+کاری";
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className={styles.pageContainer}>
          <div className={styles.loading}>در حال بارگذاری...</div>
        </div>
        <FooterMenu />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>دسته‌بندی‌های خاتم کاری کیمیاترنج</h1>
        
        {subcategories.length > 0 ? (
          <div className={styles.row}>
            {subcategories.map((subcategory) => {
              // لینک‌های مستقیم
              let href = "";
              if (subcategory.title === "ساعت خاتم کاری") {
                href = "./khatamkari/saatkhatamkari";
              } else if (subcategory.title === "شکلاتخوری خاتم") {
                href = "./khatamkari/shokolatkhori";
              } else if (subcategory.title === "سایر محصولات خاتم") {
                href = "./khatamkari/others";
              } else {
                href = `./khatamkari/${subcategory.landing_page_url}`;
              }

              return (
                <Link
                  href={href}
                  key={subcategory.id}
                  className={styles.collectionCard}
                >
                  <img
                    src={getImageUrl(subcategory.title)}
                    alt={subcategory.title}
                    className={styles.collectionImage}
                    onError={handleImageError}
                  />
                  <div className={styles.overlay}>
                    <h3 className={styles.description}>
                      {subcategory.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className={styles.noCategories}>
            <p>در حال حاضر هیچ زیردسته‌ای برای خاتم‌کاری موجود نیست</p>
          </div>
        )}

        <div className={styles.seoSection}>
          <h2>خرید محصولات خاتمکاری اصفهان | ترکیب هنر، ظرافت و اصالت</h2>

          <p>
            خاتمکاری یکی از زیباترین و ظریف‌ترین هنرهای صنایع‌دستی ایران است؛
            هنری که با کنار هم نشاندن قطعات ریز چوب، فلز و استخوان، آثاری
            خیره‌کننده می‌آفریند. محصولات خاتمکاری، ترکیبی بی‌نظیر از دقت، صبر و
            هنر ایرانی هستند؛ از جعبه‌های خاتم گرفته تا قاب آینه، میز، قلمدان و
            سرویس‌های پذیرایی. در این صفحه، مجموعه‌ای از نفیسترین آثار خاتمکاری
            شده توسط هنرمندان اصفهانی را می‌توانید ببینید و خریداری کنید. آثاری
            کاربردی، تزئینی و ماندگار، مناسب برای هدیه، دکوراسیون و تکمیل
            جهیزیه.
          </p>

          <h2>انواع محصولات خاتمکاری موجود در فروشگاه کیمیا ترنج</h2>

          <p>
            ما در فروشگاه کیمیا ترنج تنوع کاملی از محصولات خاتمکاری را با
            سلیقه‌های مختلف آماده کرده‌ایم:
          </p>

          <h3>جعبه‌های خاتمکاری</h3>
          <p>برای جواهرات، قرآن، چای، و یا هدیه. ترکیبی از هنر و کارایی.</p>

          <h3>آینه و شمعدان خاتم</h3>
          <p>مناسب سفره عقد یا دکوراسیون سنتی با جلوه‌ای هنرمندانه و اصیل.</p>

          <h3>ست‌های پذیرایی خاتمکاری</h3>
          <p>شامل سینی، قندان، شکلات‌خوری و سایر ظروف، زیبا و بادوام.</p>

          <h3>قاب و تابلو خاتم</h3>
          <p>
            قاب‌های خوشنویسی، تزئین شده با خاتم، مناسب دفاتر رسمی و منازل
            کلاسیک.
          </p>

          <h2>ویژگی‌ها و مزایای خاتمکاری اصیل ایرانی</h2>

          <ul>
            <li>
              <strong>ظرافت بی‌نظیر:</strong>
              استفاده از قطعات ریز چوب، فلز و استخوان با نظم هندسی دقیق.
            </li>
            <li>
              <strong>هنر دست:</strong>
              تمام مراحل با دستان هنرمندان خبره انجام می‌شود.
            </li>
            <li>
              <strong>دوام بالا:</strong>
              با رعایت نکات نگهداری، محصولات خاتمکاری سال‌ها ماندگار می‌مانند.
            </li>
            <li>
              <strong>نماد فرهنگ ایرانی:</strong>
              حضور در موزه‌ها، کاخ‌ها و خانه‌های اصیل ایرانی.
            </li>
          </ul>

          <h2>خاتمکاری؛ هنر نجیب و درخشان اصفهان</h2>

          <p>
            محصولات خاتمکاری نه‌فقط برای تزئین، بلکه برای انتقال حس اصالت و سنت
            به محیط زندگی طراحی شده‌اند.
          </p>

          <p>
            چه برای پذیرایی باشد، چه برای ویترین یا هدیه دادن، یک اثر خاتمکاری
            همیشه حرفی برای گفتن دارد.
          </p>

          <p>خانه‌ات را با ظرافت بی‌زمان خاتم، گرم‌تر و اصیل‌تر کن.</p>

          <h2>راهنمای خرید خاتمکاری از فروشگاه کیمیا ترنج</h2>

          <ul>
            <li>
              <strong>اندازه و کاربرد:</strong>
              جعبه بزرگ یا کوچک؟ قاب یا ست کامل؟
            </li>
            <li>
              <strong>طرح و سبک:</strong>
              کلاسیک یا ترکیبی با هنرهای دیگر مثل مینا یا میکرو خاتم？
            </li>
            <li>
              <strong>جنس و کیفیت مواد اولیه:</strong>
              هرچه ریزتر و متراکم‌تر، خاتم باارزش‌تر است.
            </li>
            <li>
              <strong>هدیه دادن؟</strong>
              حتماً مدل‌هایی با جعبه و بسته‌بندی شیک را بررسی کنید.
            </li>
            <li>
              <strong>ارسال امن و تضمینی:</strong>
              تمام محصولات کیمیا ترنج با بسته‌بندی ایمن و ضمانت اصالت ارسال
              می‌شوند.
            </li>
          </ul>
          
          <h2>سؤالات متداول درباره خاتمکاری</h2>

          <h3>محصولات خاتمکاری فقط تزئینی هستن؟</h3>
          <p>
            نه لزوماً. بسیاری از آن‌ها کاملاً کاربردی هستند (مثالً جعبه چای،
            قندان یا سینی) و علاوه بر زیبایی، استفاده روزمره هم دارند.
          </p>

          <h3>آیا خاتمکاری پوسته‌پوسته یا خراب میشه؟</h3>
          <p>
            در صورت نگهداری درست (دوری از رطوبت و ضربه)، بسیار بادوام و ماندگار
            است.
          </p>

          <h3>محصولات شما ساخت ایران هستن؟</h3>
          <p>
            بله. تمامی محصولات خاتمکاری فروشگاه کیمیا ترنج ساخت دست هنرمندان
            اصفهانی هستند.
          </p>
        </div>
      </div>
      <FooterMenu />
      <Footer />
    </>
  );
}