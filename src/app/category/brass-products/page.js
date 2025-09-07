import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./BrassProducts.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "محصولات برنجی اصل اصفهان | فروشگاه صنایع دستی کیمیا ترنج",
  description: `مجموعهای از بهترین محصولات برنجی با طراحی سنتی و مدرن، مناسب
دکوراسیون، هدیه و جهیزیه. خرید آنالین از فروشگاه صنایعدستی کیمیا ترنج.`,
};

export default async function BrassProductsPage() {
  // Empty SEO data structure for you to populate later
  const seoData = {
    hero: {
      title: "خرید محصولات برنجی دست ساز | درخشش فلز اصیل در هنر ایرانی",
      description: `محصولات برنجی، با درخشش طالیی و حس گرم و کالسیکشان، از دیرباز در خانههای ایرانی
جایگاه ویژهای داشتهاند.
از سماورهای مجلل و آینه و شمعدانهای باشکوه گرفته تا ظروف پذیرایی، جعبهها، تندیسها
و وسایل دکوراتیو .همه و همه گویای ترکیب شگفتانگیزی از زیبایی، دوام و هنر اصیل
ایرانی هستند.
در فروشگاه کیمیا ترنج، ما با دقت و وسواس، مجموعهای متنوع از محصولات برنجی دستساز
را گردآوری کردهایم؛ محصولاتی که بعضاً با هنرهای مکملی مثل قلمزنی، میناکاری یا خاتمکاری
ترکیب شدهاند تا درخشش و ارزش هنریشان دوچندان شود.
چه برای هدیه دادن، تکمیل جهیزیه، تزئین فضای سنتی یا مدرن و چه حتی برای استفاده
روزمره به دنبال اثری خاص باشید، این دستهبندی میتونه انتخابی چشمگیر و ماندگار باشد.
`,
      image: "",
    },
    productType: {
      title: "تنوع محصولات برنجی در کیمیا ترنج",
      description: `ما در کیمیا ترنج مجموعهای از کاربردیترین و خاصترین کاالهای برنجی را برای استفاده
روزمره، تزئین منزل، هدیه یا تکمیل جهیزیه فراهم کردهایم. برخی از پرفروشترین موارد
عبارتند از:`,
      items: [
        {
          title: "چراغ برنجی سنتی",
          description: `الهامگرفته از طراحیهای قدیمی ایرانی، مناسب برای دکور سنتی، سفره هفتسین یا
روشنایی تزئینی با شمع یا روغن.`,
        },
        {
          title: "شمعدان برنجی",
          description: `در طرحهای ساده، قلمزنی شده یا ترکیب با چوب و شیشه؛ مناسب میز پذیرایی، سفره عقد یا
دکور.`,
        },
        {
          title: "نمکدان برنجی",
          description: `کوچک و خوشساخت، گاهی با پایه خاتم یا طرحهای قلمزنی. نمکدانهایی خاص برای میز
غذاخوری یا چیدمان سنتی.
`,
        },
        {
          title: "آجیل خوری و پسته خوری برنجی",
          description: `ظروفی مقاوم و زیبا برای مهمانیها و پذیراییهای رسمی. بعضی مدلها با پایه و دسته تزئینی
همراه هستند.`,
        },
        {
          title: "چای خوری برنجی",
          description: `سینی و قندان برنجی ستشده، در ترکیب با استکان نعلبکیهای سنتی؛ ایدهآل برای چای
عصرانه یا پذیرایی سنتی.
`,
        },
        {
          title: "ظرف شیرینی خوری، شکالت خوری یا قندان برنجی",
          description: `طرحهایی با درب، پایهدار یا بدون پایه، مناسب برای ویترین، میز مهمان یا حتی کافه ها با تم
ایرانی.`,
        },
      ],
    },
    features: {
      title: "چرا محصولات برنجی کیمیا ترنج ارزش خرید دارند؟",
      description: "",
      items: [
        {
          title: "ساخت دست هنرمندان ایرانی :",
          description: `بسیاری از محصولات ما حاصل کارگاههای اصیل در
اصفهان اند.
`,
        },
        {
          title: " جنس باکیفیت :",
          description:
            "از آلیاژ برنج خالص یا ترکیبی با روکش ضدکدر ساخته شده اند.",
        },
        {
          title: " طراحی کاربردی و چشمنواز :",
          description: "هم برای استفاده روزمره، هم برای دکور.",
        },
        {
          title: "دوام بسیار بالا :",
          description: `محصولات برنجی در صورت نگهداری درست، سالها زیبایی خود را
حفظ می کنند.`,
        },
        {
          title: "قابل ترکیب با سایر صنایع دستی :",
          description: `مثل ترمه، خاتم، قلمزنی یا چرم دوزی.
`,
        },
      ],
    },
    decoration: {
      title: "کاربرد محصولات برنجی در دکوراسیون منزل و جهیزیه",
      description: `محصولات برنجی نهفقط بهعنوان ظروف یا وسایل کاربردی، بلکه بهعنوان بخشی از هویت و
چیدمان خانه ایرانی شناخته میشوند.
در سبکهای سنتی یا تلفیقی، حضور این محصولات حس گرما، صمیمیت و اصالت ایجاد میکند.`,
      items: [
        { title: "یک جفت شمعدان برنجی در دو طرف آینه", description: "" },
        { title: "نمکدان سنتی روی سفره یا میز", description: "" },
        { title: "آجیلخوری طالیی رنگ در وسط میز پذیرایی", description: "" },
        {
          title: " چراغ برنجی کنار ویترین یا روی میز کنار تخت",
          description: "",
        },
      ],
    },
    buyingGuide: {
      title: "راهنمای خرید محصولات برنجی از فروشگاه کیمیا ترنج",
      description: "",
      items: [
        {
          title: "کاربری مورد نظر :",
          description: `پیش از خرید، مشخص کنید که محصول مورد نظر برای استفاده
تزئینی، کاربردی یا مجموعهای از هر دو است. انتخاب میان گزینههای تکی یا ست نیز
بر اساس همین نیاز انجام میشود.`,
        },
        {
          title: "جنس و کیفیت ساخت :",
          description: `کیفیت آلیاژ برنج، ضخامت بدنه و نوع پرداخت سطح، نقش
مستقیمی در ماندگاری و جلوه ظاهری محصول دارند. محصولات کیمیا ترنج از برنج
باکیفیت و مطابق با استانداردهای صنایعدستی تولید شدهاند.`,
        },
        {
          title: "تزئینات و جزئیات هنری :",
          description: `بسته به سلیقه خود، میتوانید میان مدلهای ساده، صیقلی
یا نمونههای منقوش به قلمزنی، میناکاری یا ترکیبات چوبی انتخاب نمایید.`,
        },
        {
          title: " قیمت گذاری :",
          description: `قیمت محصولات بسته به وزن، ابعاد، نوع طراحی، تکنیک ساخت )دستی
یا قالبی( و میزان تزئینات هنری متغیر است.`,
        },
        {
          title: "ارسال و ضمانت اصالت :",
          description: `کلیه محصولات با بستهبندی ایمن و استاندارد از شهر
اصفهان ارسال میگردند و دارای ضمانت اصالت و سالمت فیزیکی کاال هستند.`,
        },
      ],
    },
    faq: {
      title: "سؤاالت متداول درباره محصولات برنجی",
      items: [
        {
          title: "آیا محصولات برنجی تغییر رنگ میدن؟",
          description:
            "بله. اما با پولیش یا مواد تمیزکننده مخصوص، بهراحتی مثل روز اول درخشان می شوند.",
        },
        {
          title: "آیا محصولات فقط تزئینی هستن؟",
          description:
            "خیر. بسیاری از ظروف برنجی مثل سماور، سینی یا قندان کامالً کاربردی هستند.",
        },
        {
          title: "همه محصولات ساخت ایران هستن؟",
          description:
            "له. تمامی آثار فروشگاه کیمیا ترنج، دستساز و ساخت هنرمندان داخلی هستند.",
        },
      ],
    },
  };

  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=محصولات برنجی&page=1`,
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
        <h1>محصولات برنجی کیمیا ترنج</h1>
        <CategoryClient
          categoryName="محصولات برنجی"
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
            <p className={styles.sectionDesc}>
              {seoData.decoration.description}
            </p>
            <ul className={styles.itemList}>
              {seoData.decoration.items.map((item, i) => (
                <li key={i}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
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
