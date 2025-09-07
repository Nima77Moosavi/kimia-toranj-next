import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./Frame.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title:
    "قاب و تابلو دست ساز اصفهان | مینیاتور، خاتم، پی وی سی و سیاه قلم | کیمیا ترنج",
  description: `انواع قاب و تابلو هنری شامل مینیاتور، خاتم، پی وی سی، سیاه قلم و آینه کاری. انتخابی اصیل برای
دکوراسیون، هدیه و یادگاری ماندگار. خرید مستقیم از فروشگاه صنایع دستی کیمیا ترنج.`,
};

export default async function FramePage() {
  // Empty SEO data structure for later population
  const seoData = {
    hero: {
      title: "قاب و تابلوهای هنری کیمیا ترنج",
      description: `قاب و تابلو از دیرباز یکی از مهمترین عناصر دکوراسیون داخلی در ایران بودهاند؛ نه فقط برای پوشاندن
دیوار خالی، بلکه برای روایت یک داستان، نمایش یک هنر یا خلق فضایی صمیمی و فاخر. مجموعه قابهای
کیمیا ترنج، با بهرهگیری از هنرهای ارزشمند اصفهان مانند مینیاتور، خاتمکاری، سیاه قلم و پیویسی
نقشدار، انتخابی هوشمندانه برای کسانی است که میخواهند خانهشان بازتاب فرهنگ و سلیقه خاصشان
باشد.`,
      image: "",
    },
    productType: {
      title: "تنوع قاب و تابلو در کیمیا ترنج",
      description: "",
      items: [
        {
          title: "تابلو مینیاتور",
          description:
            "نمایش زنده رنگی نقشهای سنتی با دقتی ظریف که فضای خانه را پر از رنگ و انرژی میکند.",
        },
        {
          title: "تابلو پی وی سی",
          description:
            "قاب هایی سبک و مقاوم با طراحی مدرن یا سنتی که حمل و نصب آسان تری دارند.",
        },
        {
          title: "تابلو خاتم دوگل",
          description:
            "ترکیبی از هنر چوب و خاتمکاری با نقش های گیاهی، مناسب فضای نشیمن یا محل کار.",
        },
        {
          title: "آینه مینیاتور",
          description:
            "آینه با قاب مینیاتوری، هم کاربری کاربردی دارد و هم جلوهای چشمگیر روی دیوار ایجاد میکند.",
        },
        {
          title: "تابلو سیاه قلم",
          description:
            "تصاویر سیاه قلمی با جزئیات بالا که جلوه ای هنری و موقر به فضا می بخشند.",
        },
      ],
    },
    features: {
      title: "چرا قاب و تابلوی کیمیا ترنج انتخابی ماندگار است؟",
      description: "",
      items: [
        { title: "تنوع بالا در سبک و ابعاد", description: "برای هر نوع دکور." },
        { title: "ساخت دست هنرمندان اصفهانی", description: "با متریال مرغوب." },
        {
          title: "مقاومت و ماندگاری بالا",
          description: "حتی پس از سال ها نصب.",
        },
        { title: "هدیه دادن در مناسبت های خاص.", description: "" },
        { title: "هماهنگی آسان با مبلمان و سایر عناصر دکور.", description: "" },
      ],
    },
    decoration: {
      title: "کاربرد قاب و تابلو در دکوراسیون",
      description: "",
      items: [
        {
          description: "نقطه کانونی دیوار در سالن پذیرایی، اتاق یا دفتر کار.",
        },
        { description: "پوشاندن و زیبا کردن دیوارهای خالی و ساده." },
        {
          description: "افزودن هویت، فرهنگ و حس هنری به فضای داخلی.",
        },
        { description: "تکمیل ست جهیزیه یا تغییر دکوراسیون فصلی." },
      ],
    },
    buyingGuide: {
      title: "راهنمای خرید قاب و تابلو – انتخاب درست برای دیوار شما",
      description: "",
      items: [
        {
          title: "ابعاد دیوار را در نظر بگیرید",
          items: [
            {
              description:
                "برای دیوارهای بزرگ، قابهای چندتکه یا سایز بزرگ جلوه بیشتری دارند.",
            },
            {
              description:
                "در فضاهای کوچکتر، قاب ظریف و تیره یا روشن متناسب با نور محیط انتخاب کنید.",
            },
          ],
        },
        {
          title: "سبک دکوراسیون را بررسی کنید",
          items: [
            { description: "مینیاتور و خاتم برای فضاهای کلاسیک." },
            { description: "پیویسی یا طرحهای سادهتر برای چیدمان مدرن." },
          ],
        },
        {
          title: " رنگ قاب را با محیط هماهنگ کنید",
          items: [
            {
              description:
                " قاب روشن برای دیوار تیره و قاب تیره برای دیوار روشن.",
            },
            {
              description:
                "در دکورهای رنگی، هماهنگی با سایههای موجود ضروری است.",
            },
          ],
        },
        {
          title: " کاربری را مشخص کنید",
          items: [
            {
              description: "صرفاً تزئینی یا ترکیب تزئینی و کاربردی )مثل آینه(.",
            },
          ],
        },
        {
          title: "توجه به جزئیات ساخت",
          items: [
            {
              description:
                "کیفیت نقاشی، ظرافت خاتمکاری یا حکاکی نقش زیادی در جلوه نهایی دارد.",
            },
          ],
        },
        {
          title: " چینش و ترکیب قابها",
          items: [
            {
              description: ` اگر چند قاب تهیه میکنید، پیش از نصب، چینش آنها را روی زمین یا دیوار با ماکت کاغذی
شبیه سازی کنید.
`,
            },
          ],
        },
      ],
    },
    faq: {
      title: "سواالت متداول درباره قاب و تابلوهای هنری",
      items: [
        {
          title: "آیا این قابها سنگین هستند؟",
          description: `وزن بسته به متریال متفاوت است. قابهای پیویسی سبکتر و قابهای چوبی خاتم یا سیاه قلم معموالً
سنگینتر هستند.`,
        },
        {
          title: "چطور قابها را تمیز کنیم؟",
          description:
            "از دستمال خشک و نرم استفاده کنید. برای قابهای چوبی یا خاتم از مواد شیمیایی قوی خودداری کنید.",
        },
        {
          title: "آیا امکان سفارش سایز یا طرح سفارشی وجود دارد؟",
          description:
            "بله، امکان سفارش برخی مدلها در ابعاد و طرح خاص با هماهنگی فروشگاه وجود دارد.",
        },
      ],
    },
  };

  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=قاب&page=1`,
    { next: { revalidate: 60 } }
  );

  const productsData = productsRes.ok
    ? await productsRes.json()
    : { results: [], next: null };

  return (
    <>
      <Header />

      <div className={styles.pageContainer}>
        <h1>محصولات قاب خاتم کیمیا ترنج</h1>
        {/* Product Grid */}
        <CategoryClient
          categoryName="قاب"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />

        {/* Hero */}
        {seoData.hero.title && (
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h2 className={styles.heroTitle}>{seoData.hero.title}</h2>
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
            <ul className={styles.itemList}>
              {seoData.decoration.items.map((item, i) => (
                <li key={i}>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
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
                  {item.items.map((item, i) => (
                    <li key={i}>
                      <p>{item.description}</p>
                    </li>
                  ))}
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
