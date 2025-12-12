import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./SilverPlated.module.css";
import FooterMenu from "@/components/FooterMenu/FooterMenu";

import Link from "next/link";
import Image from "next/image";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "خرید انواع محصولات شبه نقره برای شب یلدا",
  description:
    "شکلات‌خوری، آجیل‌خوری، گلدان، سماور، میوه‌خوری، سرویس چای‌خوری و ... شبه نقره شب یلدا. خرید اقساطی و ارسال سریع، تماس 0992078490",
};

export default async function SilverPlatedPage() {
  // Fetch all collections
  const res = await fetch(`${API_URL}api/store/collections/`, {
    cache: "force-cache",
  });
  const allCollections = res.ok ? await res.json() : [];

  // Filter only subcollections of Khatamkari (parent = 8)
  const subCollections = allCollections.filter((c) => c.parent === 2);

  // ✅ Fetch initial products for collection_id=8
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection_id=2&page=1`,
    { cache: "no-store" }
  );
  const productsData = productsRes.ok
    ? await productsRes.json()
    : { results: [] };

  const initialProducts = productsData.results || [];
  const initialHasMore = !!productsData.next;
  return (
    <>
      <Header />

      <div className={styles.pageContainer}>
        <h1 className={styles.title}>محصولات شبه نقره کیمیاترنج</h1>
        {/* <p className={styles.subtitle}>
          <strong>زیرمجموعه‌های شبه نقره</strong> در زیر نمایش داده شده‌اند.
          برای مشاهده محصولات هر دسته، کافیست روی کارت کلیک کنید.
        </p> */}
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={25} title="قو شبه نقره" href="/category/silver-plated/swan"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={16} title="کشکول شبه نقره" href="/category/silver-plated/kashkul"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={17} title="آجیل‌خوری شبه نقره" href="/category/silver-plated/nut-bowl"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={19} title="سایر محصولات شبه نقره" href="/category/silver-plated/others"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={18} title="شیرینی‌خوری شبه نقره" href="/category/silver-plated/sweet-bowl"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={22} title="میوه‌خوری شبه نقره" href="/category/silver-plated/fruit-bowl"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={21} title="شکلات‌خوری شبه نقره" href="/category/silver-plated/chocolate-bowl"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={23} title="پیش دستی شبه نقره" href="/category/silver-plated/plate"/>
        </div>
        <div className={styles.carouselWrapper}>
          <ProductCarousel collectionId={24} title="سماور شبه نقره" href="/category/silver-plated/samovar"/>
        </div>

        {/* ✅ Now pass the fetched products into CategoryClient */}
        {/* <CategoryClient
          categoryId={2}
          initialProducts={initialProducts}
          initialHasMore={initialHasMore}
        /> */}
        <section className={styles.seoSection}>
          {/* SECTION */}
          <h2>خرید محصولات شبه‌نقره برای شب یلدا</h2>
          <p>
            شب یلدا، طولانی‌ترین شب سال، فرصتی است برای &nbsp;
            <strong>
              گردهمایی خانواده و دوستان دور سفره‌های پر از خوراکی‌های سنتی
            </strong>
            .<strong>محصولات شبه‌نقره دست‌ساز کیمیا ترنج</strong>، با درخشش لوکس
            و هنر قلمزنی ایرانی، می‌توانند
            <strong>میز یلدایی شما را شکوهمند، گرم و فاخر</strong> کنند. این
            ظروف، هم کاربردی و هم تزئینی هستند و
            <strong>
              پذیرایی آجیل، شیرینی، میوه و چای را به تجربه‌ای ماندگار تبدیل
              می‌کنند
            </strong>
            .
          </p>

          <h2>شکلات‌خوری و شیرینی‌خوری شبه‌نقره هدیه و پذیرایی یلدایی</h2>
          <p>
            شکلات‌خوری و شیرینی‌خوری‌های شبه‌نقره با درب گنبدی، پایه‌دار یا
            ساده،
            <strong>مناسب میز یلدا و هدایای فاخر برای عزیزان</strong> هستند.
            استفاده از آنها کنار هندوانه، انار و شمع،
            <strong>جلوه‌های لوکس و اصیل</strong> به سفره می‌بخشد.
          </p>

          <h2>آجیل‌خوری، پسته‌خوری و میوه‌خوری شبه‌نقره، ست کامل سفره</h2>
          <p>
            آجیل‌خوری‌ها و پسته‌خوری‌های شبه‌نقره با طرح‌های قلمزنی، میز یلدایی
            را به نقطه کانونی پذیرایی تبدیل می‌کنند. میوه‌خوری‌های شیک و لوکس،
            جلوه‌ای فاخر و سنتی به دورهمی‌های شب یلدا اضافه می‌کنند.
          </p>
          {/* SECTION */}

          {/* SECTION */}
          <h2>کشکول، گلدان و سرویس چای‌خوری شبه‌نقره شب یلدا</h2>
          <p>
            <strong>کشکول شبه‌نقره</strong>: انتخابی متفاوت برای سرو آجیل، میوه
            یا حتی به عنوان المان دکوری روی میز و کنسول.
            <br />
            <strong>گلدان شبه‌نقره</strong>: با نقوش کلاسیک و قلمزنی، زیبایی میز
            یلدا و دکور داخلی را افزایش می‌دهد.
            <br />
            <strong>سرویس چای‌خوری</strong>: ست کامل با سینی، قوری و فنجان،
            تجربه نوشیدن چای در شب یلدا را خاص و خاطره‌انگیز می‌کند.
          </p>

          <h2>نکات چیدمان شبه‌نقره در شب یلدا</h2>
          <ul>
            <li>
              <strong>ترکیب پذیرایی و تزئین</strong>: شکلات‌خوری، آجیل‌خوری و
              قندان برای پذیرایی؛ گلدان و کشکول برای تزئین
            </li>
            <li>
              <strong>هماهنگی با سفره یلدا</strong>: رنگ و نقش شبه‌نقره را با
              عناصر سنتی مثل ترمه، شمع و میوه‌ها هماهنگ کنید
            </li>
            <li>
              <strong>هدیه شب یلدا</strong>: بسته‌بندی شکیل محصولات شبه‌نقره،
              آنها را به هدایای لوکس و ماندگار تبدیل می‌کند
            </li>
            <li>
              <strong>انتخاب طرح مناسب</strong>: گل و مرغ برای حس صمیمی و گرم؛
              نقوش اسلیمی و هندسی برای جلوه‌های رسمی و باشکوه
            </li>
          </ul>
          {/* SECTION */}

          {/* SECTION */}
          <h2>
            چرا محصولات شبه‌نقره کیمیا ترنج انتخاب مناسبی برای یلدا هستند؟
          </h2>
          <ul>
            <li>
              <strong>درخشش لوکس با هزینه کمتر از نقره خالص</strong>
            </li>
            <li>
              <strong>هنر قلمزنی دست‌ساز ایرانی و طراحی فاخر</strong>
            </li>
            <li>
              <strong>کاربردی و تزئینی</strong>: مناسب پذیرایی و دکور
            </li>
            <li>
              <strong>دوام بالا</strong>: نگهداری مناسب، درخشندگی سال‌ها حفظ
              می‌شود
            </li>
            <li>
              <strong>هدیه و یادگاری ماندگار</strong>: بسته‌بندی شیک برای ارسال
              به سراسر کشور
            </li>
          </ul>
          {/* SECTION */}
          <h2>زیبایی و اصالت، درخشش ماندگار بدون هزینه سنگین نقره خالص</h2>
          <p>
            شبه‌نقره، انتخابی هوشمندانه برای کسانی است که می‌خواهند درخشش و شکوه
            نقره را داشته باشند اما دغدغه هزینه بسیار بالای آن را ندارند.
            محصولات شبه نقره کیمیا ترنج، با هنر قلمزنی دست‌ساز، ترکیبی از جلوه
            لوکس و ماندگاری بالا را ارائه می‌کند.
          </p>

          <h2>تنوع محصولات شبه نقره در کیمیا ترنج</h2>
          <h3>گلدان شبه نقره</h3>
          <p>
            همراهی هنر قلمزنی با فرم‌های کلاسیک گلدان، این محصولات را به المانی
            لوکس برای میزها و کنسول‌ها تبدیل کرده است.
          </p>
          <h3>شیرینی‌خوری شبه نقره</h3>
          <p>
            از پذیرایی رسمی تا دورهمی‌های خانوادگی، شیرینی‌خوری‌های سه‌پایه یا
            دسته‌دار با طرح‌های گل و مرغ، جلوه‌ای چشم‌نواز به مهمانی‌های شما
            می‌بخشند.
          </p>
          <h3>شکلات‌خوری شبه نقره</h3>
          <p>
            با درب گنبدی شکل یا بدون درب، این ظروف هم به عنوان پذیرایی و هم شیء
            تزئینی ارزشمند شناخته می‌شوند.
          </p>
          <h3>کشکول شبه نقره</h3>
          <p>
            کشکول‌های قلمزنی شده، انتخابی متفاوت برای سرو آجیل یا استفاده به
            عنوان المان خاص در دکوراسیون سالن.
          </p>
          <h3>تنگ و نیم‌ست پذیرایی شبه نقره</h3>
          <p>
            تنگ‌های قلمزنی شده همراه با لیوان یا گلدان‌های سبک، ست جذابی برای
            جهیزیه یا هدیه ایجاد می‌کند.
          </p>

          <h2>چرا محصولات شبه نقره کیمیا ترنج ارزش خرید دارند؟</h2>
          <ul>
            <li>قیمت مناسب‌تر از نقره خالص بدون کاهش چشمگیر در جلوه بصری.</li>
            <li>
              هنر قلمزنی اصیل روی بدنه مس یا فلز مرغوب با آبکاری شبه نقره.
            </li>
            <li>تنوع فرم و کاربرد از ظرف پذیرایی تا دکوری خاص.</li>
            <li>
              دوام آبکاری در صورت نگهداری صحیح، تا سال‌ها درخشش خود را حفظ
              می‌کند.
            </li>
            <li>بسته‌بندی ایمن و مناسب هدیه برای ارسال به سراسر کشور.</li>
          </ul>

          <h2>کاربرد محصولات شبه نقره در خانه و مراسم</h2>
          <ul>
            <li>پذیرایی مجلل در مهمانی‌ها با سرو شیرینی، شکلات یا آجیل.</li>
            <li>
              استفاده به عنوان المان دکوری روی میز پذیرایی، بوفه یا کنسول.
            </li>
            <li>
              هدایای رسمی یا شخصی که هم ارزش هنری دارد و هم یادگاری ماندگار است.
            </li>
            <li>افزودن جلوه سنتی به خانه با کمترین تغییر در مبلمان و هزینه.</li>
          </ul>

          <h2>راهنمای خرید محصولات شبه نقره – مشاوره انتخاب هوشمندانه</h2>
          <ol>
            <li>
              <strong>انتخاب براساس کاربرد:</strong> اگر به دنبال پذیرایی هستید،
              شیرینی‌خوری، شکلات‌خوری و کشکول بهترین گزینه‌اند. اگر صرفاً جنبه
              تزئینی مدنظر است، گلدان و تنگ‌های قلمزنی جلوه بیشتری ایجاد
              می‌کنند.
            </li>
            <li>
              <strong>اندازه و ابعاد:</strong> ظروف کوچک و متوسط برای میز
              پذیرایی مناسب‌ترند. مدل‌های بزرگ یا کشکول‌های خاص برای بوفه یا میز
              کنسول ایده‌آل هستند.
            </li>
            <li>
              <strong>طرح و نقش قلمزنی:</strong> گل و مرغ برای دکور گرم و صمیمی،
              نقش‌های اسلیمی و هندسی برای فضاهای رسمی.
            </li>
            <li>
              <strong>بررسی کیفیت آبکاری:</strong> رنگ شبه نقره یکنواخت، بدون
              سایه یا لکه باشد. لبه‌ها و دسته‌ها بدون خراش یا پوسته‌شدگی باشند.
            </li>
            <li>
              <strong>بودجه‌بندی هوشمندانه:</strong> اگر هدیه می‌خرید، مدل‌های
              متوسط با جعبه شکیل ارزش احساسی و اقتصادی خوبی دارند.
            </li>
          </ol>

          <h2>سوالات متداول درباره محصولات شبه نقره</h2>
          <h3>آیا محصولات شبه نقره تغییر رنگ می‌دهند؟</h3>
          <p>
            در صورت نگهداری صحیح و دوری از رطوبت بالا، سال‌ها بدون تغییر رنگ
            باقی می‌مانند.
          </p>
          <h3>آیا می‌توان شستشو کرد؟</h3>
          <p>بله، اما با دستمال نرم و مرطوب و بدون مواد شیمیایی قوی.</p>
          <h3>محصولات ساخت کجاست؟</h3>
          <p>
            تمامی محصولات قلمزنی شبه نقره در اصفهان و به دست هنرمندان ایرانی
            ساخته می‌شوند.
          </p>
        </section>
      </div>
      <FooterMenu />
      <Footer />
    </>
  );
}
