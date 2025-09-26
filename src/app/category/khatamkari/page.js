import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./Khatamkari.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "خاتمکاری اصفهان اصل | خرید اینترنتی از کیمیا ترنج",
  description: `روش انواع آثار خاتمکاری دستساز، شامل جعبه، قاب، ست پذیرایی و هدیههای
هنری. هنر اصیل ایرانی را از کیمیا ترنج تجربه کنید. ارسال تضمینی.`,
};

export default async function KhatamkariPage() {
  // Empty SEO data structure for later population
  const seoData = {
    hero: {
      title: "خرید محصولات خاتمکاری اصفهان | ترکیب هنر، ظرافت و اصالت",
      description: `خاتمکاری یکی از زیباترین و ظریفترین هنرهای صنایعدستی ایران است؛ هنری که با کنار هم نشاندن
قطعات ریز چوب، فلز و استخوان، آثاری خیرهکننده میآفریند.
محصولات خاتمکاری، ترکیبی بینظیر از دقت، صبر و هنر ایرانی هستند؛ از جعبههای خاتم گرفته تا قاب
آینه، میز، قلمدان و سرویسهای پذیرایی.
در این صفحه، مجموعهای از نفیسترین آثار خاتمکاری شده توسط هنرمندان اصفهانی را میتوانید ببینید و
خریداری کنید. آثاری کاربردی، تزئینی و ماندگار، مناسب برای هدیه، دکوراسیون و تکمیل جهیزیه.`,
      image: "",
    },
    productType: {
      title: "انواع محصولات خاتمکاری موجود در فروشگاه کیمیا ترنج",
      description:
        "ما در فروشگاه کیمیا ترنج تنوع کاملی از محصولات خاتمکاری را با سلیقههای مختلف آماده کردهایم:",
      items: [
        {
          title: "جعبههای خاتمکاری",
          description:
            "برای جواهرات، قرآن، چای، و یا هدیه. ترکیبی از هنر و کارایی.",
        },
        {
          title: "آینه و شمعدان خاتم",
          description:
            "مناسب سفره عقد یا دکوراسیون سنتی با جلوهای هنرمندانه و اصیل.",
        },
        {
          title: "ستهای پذیرایی خاتمکاری",
          description:
            "شامل سینی، قندان، شکالتخوری و سایر ظروف، زیبا و بادوام.",
        },
        {
          title: "قاب و تابلو خاتم",
          description:
            "قابهای خوشنویسی، تزئین شده با خاتم، مناسب دفاتر رسمی و منازل کالسیک.",
        },
      ],
    },
    features: {
      title: "ویژگیها و مزایای خاتمکاری اصیل ایرانی",
      description: "",
      items: [
        {
          title: "ظرافت بینظیر :",
          description:
            "استفاده از قطعات ریز چوب، فلز و استخوان با نظم هندسی دقیق.",
        },
        {
          title: "هنر دست :",
          description: "تمام مراحل با دستان هنرمندان خبره انجام میشود.",
        },
        {
          title: "دوام باال :",
          description:
            "با رعایت نکات نگهداری، محصولات خاتمکاری سالها ماندگار میمانند.",
        },
        {
          title: "نماد فرهنگ ایرانی :",
          description: "حضور در موزهها، کاخها و خانههای اصیل ایرانی.",
        },
      ],
    },
    decoration: {
      title: "خاتمکاری؛ هنر نجیب و درخشان اصفهان",
      description: `محصولات خاتمکاری نهفقط برای تزئین، بلکه برای انتقال حس اصالت و سنت به محیط زندگی طراحی
شدهاند.
چه برای پذیرایی باشه، چه برای ویترین یا هدیه دادن، یک اثر خاتمکاری همیشه حرفی برای گفتن دارد.
خونهات رو با ظرافت بیزمان خاتم، گرمتر و اصیلتر کن.`,
    },
    buyingGuide: {
      title: "راهنمای خرید خاتمکاری از فروشگاه کیمیا ترنج",
      description: "",
      items: [
        {
          title: "اندازه و کاربرد :",
          description: "جعبه بزرگ یا کوچک؟ قاب یا ست کامل؟",
        },
        {
          title: "طرح و سبک :",
          description:
            "کالسیک یا ترکیبی با هنرهای دیگر مثل مینا یا میکرو خاتم؟",
        },
        {
          title: "جنس و کیفیت مواد اولیه :",
          description: "هرچه ریزتر و متراکمتر، خاتم باارزشتر است.",
        },
        {
          title: "هدیه دادن؟",
          description: "حتما مدلهایی با جعبه و بستهبندی شیک را بررسی کنید.",
        },
        {
          title: "ارسال امن و تضمینی :",
          description: `تمام محصولات کیمیا ترنج با بستهبندی ایمن و ضمانت اصالت ارسال می
شوند.`,
        },
      ],
    },
    faq: {
      title: "سؤاالت متداول درباره خاتمکاری",
      items: [
        {
          title: "محصولات خاتمکاری فقط تزئینی هستن؟",
          description:
            "نه لزوما. بسیاری از آن ها کاملا کاربردی هستند(مثلا چایدان، قندان یا سینی)",
        },
        {
          title: "آیا خاتمکاری پوسته پوسته یا خراب میشه؟",
          description:
            "در صورت نگهداری درست )دوری از رطوبت و ضربه(، بسیار بادوام و ماندگار است.",
        },
        {
          title: "محصولات شما ساخت ایران هستن؟",
          description:
            "بله. تمامی محصولات خاتمکاری فروشگاه کیمیا ترنج ساخت دست هنرمندان اصفهانی هستند.",
        },
      ],
    },
  };

  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=خاتم کاری&page=1`,
    { next: { revalidate: 60 } }
  );

  const productsData = productsRes.ok
    ? await productsRes.json()
    : { results: [], next: null };

  return (
    <>
      <Header />

      <div className={styles.pageContainer}>
        {/* Product Grid */}
        <h1>محصولات خاتم کاری</h1>
        <CategoryClient
          categoryName="خاتم کاری"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />

        {/* Hero */}
        {seoData.hero.title && (
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{seoData.hero.title}</h1>
              <p className={styles.heroDesc}>{seoData.hero.description}</p>
            </div>
            {seoData.hero.image && (
              <div className={styles.heroImage}>
                <img src={seoData.hero.image} alt={seoData.hero.title} />
              </div>
            )}
          </section>
        )}

        {/* Product Type */}
        {seoData.productType.title && (
          <section>
            <h2 className={styles.sectionTitle}>{seoData.productType.title}</h2>
            <p className={styles.sectionDesc}>
              {seoData.productType.description}
            </p>
            <ul className={styles.itemList}>
              {seoData.productType.items.map((item, i) => (
                <li key={i}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Features */}
        {seoData.features.title && (
          <section>
            <h2 className={styles.sectionTitle}>{seoData.features.title}</h2>
            <p className={styles.sectionDesc}>{seoData.features.description}</p>
            <ul className={styles.itemList}>
              {seoData.features.items.map((item, i) => (
                <li key={i}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Decoration */}
        {seoData.decoration.title && (
          <section>
            <h2 className={styles.sectionTitle}>{seoData.decoration.title}</h2>
            <p className={styles.sectionDesc}>
              {seoData.decoration.description}
            </p>
          </section>
        )}

        {/* Buying Guide */}
        {seoData.buyingGuide.title && (
          <section>
            <h2 className={styles.sectionTitle}>{seoData.buyingGuide.title}</h2>
            <p className={styles.sectionDesc}>
              {seoData.buyingGuide.description}
            </p>
            <ul className={styles.itemList}>
              {seoData.buyingGuide.items.map((item, i) => (
                <li key={i}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        {seoData.faq.title && (
          <section>
            <h2 className={styles.sectionTitle}>{seoData.faq.title}</h2>
            <ul className={styles.faqList}>
              {seoData.faq.items.map((faq, i) => (
                <li key={i}>
                  <h3 className={styles.itemTitle}>{faq.title}</h3>
                  <p>{faq.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}
