import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./OrganizationalGiftPack.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "پک هدیه سازمانی | هدایای شرکتی لوکس و سفارشی",
  description:
    "مجموعه‌ای از پک‌های هدیه سازمانی شیک و باکیفیت، مناسب برای مناسبت‌های رسمی، قدردانی از کارکنان و مشتریان. امکان سفارشی‌سازی و ارسال سریع.",
};

export default async function OrganizationalGiftPackPage() {
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=پک هدیه سازمانی&page=1`,
    { next: { revalidate: 60 } }
  );

  const productsData = productsRes.ok
    ? await productsRes.json()
    : { results: [], next: null };

  return (
    <>
      <Header />

      <div className={styles.pageContainer}>
        <CategoryClient
          categoryName="پک هدیه سازمانی"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              خرید پک هدیه سازمانی صنایع دستی اصفهان، ترکیب هنر و احترام در هدیه
            </h2>
            <p className={styles.heroSubtitle}>
              هدیه‌دادن، زبان احترام و قدردانی است. زمانی که این هدیه از دل
              فرهنگ و هنر ایرانی آمده باشد، ارزش معنوی آن دوچندان خواهد شد.
              پک‌های هدیه سازمانی فروشگاه کیمیا ترنج، ترکیبی‌اند از زیبایی،
              اصالت و کیفیت، طراحی‌شده برای مدیران، سازمان‌ها و برندهایی که به
              ماندگار بودن روابط کاری خود اهمیت می‌دهند. در این دسته‌بندی
              می‌توانید انواع پک‌های متنوع صنایع‌دستی شامل محصولات برنجی،
              قلمزنی، چای‌خوری، آجیل‌خوری، شمعدان و دیگر آثار فاخر هنری را
              مشاهده و انتخاب نمایید.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/images/organizational-gift-pack.webp"
              alt="پک هدیه سازمانی"
              className={styles.heroImg}
            />
          </div>
        </section>

        {/* Product Types Section */}
        <section className={styles.productTypesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              انواع پک‌های هدیه سازمانی در کیمیا ترنج
            </h2>
            <div className={styles.productTypesGrid}>
              <div className={styles.productTypeCard}>
                <h3>پک هدیه شمعدان</h3>
                <p>
                  شامل شمعدان‌های برنجی یا قلم‌زنی‌شده، همراه با جعبه نفیس.
                  مناسب برای هدایای مدیریتی و رسمی.
                </p>
              </div>
              <div className={styles.productTypeCard}>
                <h3>پک چای‌خوری سنتی</h3>
                <p>
                  ترکیب سماور کوچک، قوری، استکان نعلبکی یا سینی برنجی، در
                  بسته‌بندی خاص. انتخابی اصیل برای مدیران یا میهمانان ویژه.
                </p>
              </div>
              <div className={styles.productTypeCard}>
                <h3>پک آجیل‌خوری یا پذیرایی</h3>
                <p>
                  شامل ظرف‌های برنجی یا خاتم‌کاری، در قالبی رسمی و چشم‌نواز.
                  مناسب برای هدیه پایان سال.
                </p>
              </div>
              <div className={styles.productTypeCard}>
                <h3>پک ترکیبی صنایع‌دستی</h3>
                <p>
                  تلفیقی از چند محصول هنری همچون ترمه، جاقاشقی، نمکدان، یا
                  محصولات قلم‌زنی در یک بسته‌بندی هماهنگ.
                </p>
              </div>
              <div className={styles.productTypeCard}>
                <h3>پک‌های سفارشی</h3>
                <p>
                  امکان طراحی پک اختصاصی با لوگو، کارت تبریک و بسته‌بندی برندشده
                  برای سازمان‌ها فراهم است.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              چرا پک‌های هدیه سازمانی کیمیا ترنج؟
            </h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <h3>هنر اصیل ایرانی</h3>
                <p>
                  تمامی محصولات صنایع‌دستی موجود در پک‌ها، ساخت دست هنرمندان
                  اصفهانی هستند.
                </p>
              </div>
              <div className={styles.featureItem}>
                <h3>بسته‌بندی شکیل و سازمانی</h3>
                <p>
                  استفاده از جعبه‌های نفیس، بسته‌بندی ایمن و قابلیت درج نشان
                  تجاری سازمان.
                </p>
              </div>
              <div className={styles.featureItem}>
                <h3>تنوع بالا</h3>
                <p>
                  متناسب با بودجه‌های مختلف و تیراژ متنوع، برای نیازهای
                  سازمان‌های کوچک تا برندهای بزرگ.
                </p>
              </div>
              <div className={styles.featureItem}>
                <h3>امکان خرید عمده و سفارش ویژه</h3>
                <p>ما امکان تأمین تیراژ بالا با زمان‌بندی دقیق را داریم.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>ارزش‌افزوده برند شما</h3>
                <p>
                  این هدایا نه‌تنها احترام، بلکه هویت فرهنگی برند شما را نیز به
                  مخاطب منتقل می‌کنند.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Guide Section */}
        <section className={styles.buyingGuideSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              راهنمای خرید پک هدیه سازمانی از کیمیا ترنج
            </h2>
            <div className={styles.buyingGuideGrid}>
              <div className={styles.guideItem}>
                <h3>مناسبت هدیه</h3>
                <p>
                  برای نوروز، روز معلم، روز کارمند یا مراسم رسمی؟ هر مناسبت
                  نیازمند طراحی متفاوتیست.
                </p>
              </div>
              <div className={styles.guideItem}>
                <h3>نوع مخاطب</h3>
                <p>
                  برای مدیر، مشتری کلیدی یا کارکنان؟ پک‌ها را بر اساس سطح هدیه
                  انتخاب کنید.
                </p>
              </div>
              <div className={styles.guideItem}>
                <h3>بودجه سازمانی</h3>
                <p>
                  ما گزینه‌هایی با قیمت متنوع ارائه می‌دهیم، از پک‌های اقتصادی
                  تا نمونه‌های خاص و لوکس.
                </p>
              </div>
              <div className={styles.guideItem}>
                <h3>هویت سازمانی</h3>
                <p>
                  امکان افزودن لوگو، رنگ برند یا پیام اختصاصی داخل بسته‌ها وجود
                  دارد.
                </p>
              </div>
              <div className={styles.guideItem}>
                <h3>ارسال و بسته‌بندی</h3>
                <p>
                  سفارش‌ها با بسته‌بندی ایمن، زمان‌بندی هماهنگ و ارسال سراسری
                  انجام می‌شوند.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              سوالات متداول درباره پک‌های سازمانی
            </h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3>پک‌ها قابل سفارشی‌سازی هستند؟</h3>
                <p>
                  بله، امکان انتخاب محصول، درج لوگو، کارت تبریک یا طراحی اختصاصی
                  برای شرکت شما وجود دارد.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>حداقل تعداد سفارش چقدر است؟</h3>
                <p>
                  حداقل تعداد سفارش برای پک‌های سازمانی معمولاً ۵ عدد است، اما
                  برای سفارش‌های ویژه هماهنگ می‌شود.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>امکان ارسال به چند آدرس وجود دارد؟</h3>
                <p>
                  بله، می‌توان سفارش‌های سازمانی را به‌صورت تفکیک‌شده به
                  آدرس‌های مختلف ارسال کرد.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>آماده سفارش پک هدیه سازمانی هستید؟</h2>
              <p>مجموعه کامل پک‌های هدیه سازمانی ما را مشاهده کنید</p>
              <Link
                href="/shop?collection=پک هدیه سازمانی"
                className={styles.ctaButton}
              >
                مشاهده پک‌ها
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
