import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./BrassSamovar.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "خرید سماور برنجی سنتی و مدرن | جلوه ای از اصالت ایرانی",
  description:
    "سماور برنجی نماد اصالت چای نوشی ایرانی؛ ترکیبی از کاربرد روزمره و هنر دست. مشاهده مدل‌های زغالی، برقی و تزئینی.",
};

export default async function BrassSamovarPage() {
  // Fetch first page of products for this category
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=سماور برنجی&page=1`,
    { next: { revalidate: 60 } } // revalidate every 60s
  );

  const productsData = productsRes.ok
    ? await productsRes.json()
    : { results: [], next: null };

  const seoData = {
    hero: {
      title: "خرید سماور برنجی سنتی و مدرن | جلوه ای از اصالت ایرانی",
      description: `سماور برنجی یکی از نمادهای اصیل فرهنگ چای نوشی در ایران است؛ محصولی که تلفیقی از کاربرد روزمره و هنر
دست ساز ایرانی است. برنج، فلزی زیبا، مقاوم و براق است که از دیرباز در ساخت ظروف پذیرایی به کار می رفته. سماور
برنجی عالوه بر عملکرد بسیار خوب در گرم نگه داشتن آب، بهدلیل طراحی سنتی و بدنه ای چشمنواز، انتخابی لوکس برای
دکور خانه یا محل کار نیز به شمار می آید.
در این صفحه می توانید بهترین مدل های سماور برنجی زغالی، برقی، تزئینی و کاربردی را مشاهده و خریداری
کنید؛ محصوالتی که با دقت باال ساخته شده اند و بعضا هنرهای دستی د یگری مثل قلمزنی یا میناکاری را هم در خود
جای داده اند.`,
      image: "",
    },
    productType: {
      title: "انواع سماور برنجی موجود در فروشگاه کیمیا ترنج",
      description: `ما مجموعه ای متنوع و دسته بندی شده از سماورهای برنجی را برای سلیقه ها و نیازهای مختلف آماده کرده ایم:`,
      items: [
        {
          title: "سماور برنجی زغالی سنتی",
          description: `انتخابی کالسیک برای عالقه مندان به روش های سنتی دم آوری چای.
این مدل ها حس نوستالژیک خانه مادربزرگ را زنده می کنند.`,
        },
        {
          title: "سماور برنجی برقی",
          description: `ترکیبی از زیبایی سنتی و تکنولوژی مدرن. مناسب برای استفاده راحت و
روزمره در آشپزخانههای امروزی .`,
        },
        {
          title: "سماور برنجی با طرح قلمزنی",
          description: `نمونه هایی هنرمندانه که توسط هنرمندان اصفهانی تزئین شده اند؛
گزینه ای بی نظیر برای هدیه یا دکور.`,
        },
        {
          title: "ست چای خوری برنجی",
          description: `شامل سماور، قوری، سینی و استکان نعلبکی هم سبک؛ مناسب جهیزیه یا
پذیرایی های خاص.`,
        },
      ],
    },
    features: {
      title: "ویژگی ها و مزایای سماور برنجی اصل",
      description: `انتخاب سماور برنجی صرفا یک خرید نیست، بلکه یک سرمایه گذاری در زیبایی و ماندگاری است. برخی ویژگی های مهم
این محصوالت:`,
      items: [
        {
          title: "جنس فلز خالص",
          description:
            "بدنه از آلیاژ برنج خالص ساخته شده و معموال با روکش ضدکدر شدن محافظت می شود.",
        },
        {
          title: " رسانای حرارتی عالی",
          description: `برنج گرما را به خوبی منتقل می کند، بنابراین سماور در مصرف انرژی بهینه تر عمل
میکند.
`,
        },
        {
          title: "طول عمر باا",
          description: `برخالف سماورهای ارزان قیمت از جنس آلومینیوم یا استیل بی کیفیت، سماور برنجی سال ها
دوام دارد.`,
        },
        {
          title: "قابل استفاده یا تزئینی",
          description: `برخی مدل ها کامال عملیاتی هستند، درحالی که مدلهای خاص تر برای دکوراسیون
داخلی طراحی شده اند.`,
        },
        {
          title: "ساخت ایران، هنر ایرانی",
          description: `بسیاری از این سماورها ساخت دست هنرمندان اصفهانی هستند و هرکدام دارای
امضای خاص خود می باشند.
`,
        },
      ],
    },
    decoration: {
      title: "سماور برنجی؛ تلفیقی از کاربرد و زیبایی در خانه ایرانی",
      description: `اگر دکور خانهات رو به سبک سنتی یا تلفیقی می چینی، یک سماور برنجی دقیقا همون قطعه ایه که فضا رو تکمیل می کنه.
این محصوالت با فرم براق، جزئیات زیبا، و درخشندگی طالیی رنگ شون نه تنها حس گرما و صمیمیت می دن، بلکه
نشون دهنده احترام به هنر و میراث فرهنگی ایران هم هستن.
چه در اتاق پذیرایی باشه، چه روی اپن آشپزخونه یا در ویترین شیشهای، سماور برنجی همیشه جلب توجه می کنه و بهنوعی
"امضای سبک زندگی ایرانی" محسوب می شه.`,
    },
    buyingGuide: {
      title: "راهنمای خرید سماور برنجی از فروشگاه کیمیا ترنج",
      description: `ما در فروشگاه <a href='/'>کیمیا ترنج</a> تالش می کنیم تا خریدی راحت، مطمئن و آگاهانه برای شما فراهم کنیم. پیش از خرید به نکات
زیر توجه داشته باشید :`,
      items: [
        {
          title: "حجم و ظرفیت :",
          description:
            "اگر برای استفاده روزمره می خواید، مدل های ۳ تا ۵ لیتری مناسبترن.",
        },
        {
          title: "نوع سوخت :",
          description:
            "ترجیح می دید زغالی باشه یا برقی؟ هرکدوم مزایای خودشون رو دارن.",
        },
        {
          title: "قیمت :",
          description:
            "بسته به ضخامت برنج، نوع پرداخت و هنرهای به کاررفته )مثل قلمزنی یا میناکاری(، قیمتها متفاوته.",
        },
        {
          title: "گارانتی و ارسال :",
          description:
            "تمام محصوالت با ضمانت اصالت و ارسال سریع از اصفهان ارائه می شن.",
        },
      ],
    },
    faq: {
      title: "سؤالات متداول درباره سماور برنجی",
      items: [
        {
          title: "آیا سماور برنجی تغییر رنگ می ده؟",
          description: `بله، فلز برنج در تماس با هوا ممکنه کدر بشه یا لک بگیره. اما با محلول های طبیعی یا پولیش مخصوص به راحتی براق
میشه.`,
        },
        {
          title: "میتونم از سماور برنجی استفاده روزمره داشته باشم؟",
          description:
            "بله. به خصوص مدل های برقی و ساده تر، کاملا برای استفاده روزانه طراحی شدن. فقط به نگهداری درست نیاز دارن.",
        },
        {
          title: "سماورهای شما تولید ایران هستن یا وارداتی؟",
          description:
            "تمام سماورهای ما ساخت ایران هستن و بسیاری از اون ها توسط هنرمندان اصفهانی بهصورت دستی ساخته شده ان.",
        },
      ],
    },
  };

  return (
    <>
      <Header />

      <div className={styles.pageContainer}>
        {/* Product Grid */}
        <h1>محصولات سماور برنجی کیمیاترنج</h1>
        <CategoryClient
          categoryName="سماور برنجی"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />

        {/* Hero */}
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

        {/* Product Type */}
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

        {/* Features */}
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

        {/* Decoration */}
        <section>
          <h2 className={styles.sectionTitle}>{seoData.decoration.title}</h2>
          <p className={styles.sectionDesc}>{seoData.decoration.description}</p>
        </section>

        {/* Buying Guide */}
        <section>
          <h2 className={styles.sectionTitle}>{seoData.buyingGuide.title}</h2>
          <p
            className={styles.sectionDesc}
            dangerouslySetInnerHTML={{
              __html: seoData.buyingGuide.description,
            }}
          ></p>
          <ul className={styles.itemList}>
            {seoData.buyingGuide.items.map((item, i) => (
              <li key={i}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
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
      </div>

      <Footer />
    </>
  );
}
