import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./GoldenBrass.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title:
    "محصولات زرینه قلم زنی اصفهان | آجیل خوری، شکالت خوری، گلدان و تنگ | کیمیا ترنج",
  description: `مجموعه ای فاخر از محصولات زرینه قلم زنی اصفهان شامل آجیل خوری، تنگ، گلدان، شیرینی خوری و چراغ
تزئینی. مناسب هدیه، جهیزیه و دکوراسیون لوکس. خرید مستقیم از فروشگ اه صنایع دستی کیمیا ترنج.`,
};

export default async function GoldenBrassPage() {
  // Empty SEO data structure for later population
  const seoData = {
    hero: {
      title: "ترکیب شکوه طلا با اصالت هنر ایرانی",
      description: `زرینه، اوج تلفیق درخشش فلز طالگونه با هنر اصیل قلم زنی ایرانی است. هر قطعه حاصل ساعتها کار دست
هنرمند اصفهانی است که با دقتی بی نظیر، طرح های اسلیمی، گل و مرغ یا نقوش هندسی را روی بدنه فلزی
حکاکی کرده و سپس با آبکاری طالیی، آن را به اثری ماندگار تبدیل می کند. این ظروف تنها ابزار پذیرایی نیستند،
بلکه بخشی از خاطره و فرهنگ ایرانی را بر میز مهمانی و در ویترین خانه شما می نشانند.
`,
      image: "",
    },
    productType: {
      title: "تنوع محصولات زرینه در کیمیا ترنج",
      description: "",
      items: [
        {
          title: "آجیل خوری زرینه",
          description: `فرم های پایهدار با کاسه پهن و لبه های قلمزنی، انتخابی ایدهآل برای پذیرایی رسمی. مدلهایی مانند آجیل خوری
۹ برای سرو حجم متوسط و مدلهای چندکاره برای مهمانیهای پرجمعیت مناسب اند.`,
        },
        {
          title: "شیرینی خوری زرینه",
          description: `ظروفی با پایه بلند و بشقاب پهن که چیدمان شیرینی ها را چشمگیرتر می کند. طراحی کالسیک همراه با قلم زنی
ریز باعث می شود حتی بدون محتوا هم چشم نواز باشند.`,
        },
        {
          title: "شکلات خوری زرینه",
          description: `مدلهایی با درب گنبدی نقشدار که هم محتوا را حفظ می کنند و هم جلوه ای لوکس به میز پذیرایی می دهند.
برای هدیه های خاص بسیار محبوب اند.`,
        },
        {
          title: "تنگ زرینه",
          description: `از فرم های باریک کشیده تا مدلهای پهنتر، این تنگ ها میتوانند هم نقش گلدان را ایفا کنند و هم ظرف سرو
نوشیدنیهای مجلسی باشند. در ست های کامل پذیرایی اغلب همراه لیوان یا گلدان هم طرح عرضه می شوند. `,
        },
        {
          title: "گلدان زرینه",
          description: `مدلهای شکمی و موشکی هر کدام حس و حال متفاوتی دارند. گلدان شکمی، حس صمیمیت و اصالت سنتی را
منتقل می کند و مدل موشکی به فضا حالتی رسمی و مجلل می بخشد.`,
        },
        {
          title: "چراغ تزئینی زرینه",
          description: `عالوه بر تأمین نور مالیم، به عنوان یک المان دکوراتیو فاخر در سالن ها، هتل ها و فضای خانه بسیار پر طرفدار
است. `,
        },
      ],
    },
    features: {
      title: "چرا محصولات زرینه کیمیا ترنج انتخابی خاص هستند؟",
      items: [
        {
          title: "",
          description: "آبکاری طالیی براق با درخشندگی ماندگار حتی در نور کم. ",
        },
        {
          title: "",
          description:
            " طرح های دستی منحصر به فرد که مشابه دقیق شان پیدا نمیشود.",
        },
        {
          title: "",
          description: " دوام باال در برابر خط وخش و تغییر رنگ با مراقبت صحیح.",
        },
        {
          title: "",
          description: " قابلیت سفارشی سازی و تهیه ست کامل متناسب با نیاز",
        },
        {
          title: "",
          description:
            "بستهبندی فاخر و امن برای هدیه دادن بدون دغدغه آسیبدیدگی.",
        },
      ],
    },
    decoration: {
      title: "کاربرد محصولات زرینه در دکوراسیون و مراسم",
      description: "",
      items: [
        {
          description:
            " ایجاد نقطه کانونی (Focal Point) در ویترین یا میز پذیرایی.",
        },
        {
          description:
            " هماهنگی کامل با چیدمان سبک کالسیک و مبلمان چوبی یا پارچه مخمل. ",
        },
        {
          description:
            "استفاده در مراسم رسمی مانند نامزدی، عقد، سالگرد و افتتاحیه.",
        },
        { description: "تکمیل ست جهیزیه عروس با ظروف هم طرح پذیرایی." },
        {
          description: "دکوراسیون هتل ها، رستوران های لوکس و تالارهای پذیرایی.",
        },
      ],
    },
    buyingGuide: {
      title: "راهنمای خرید محصولات زرینه – انتخاب با نگاه حرفهای",
      items: [
        {
          title: "کاربری را دقیق مشخص کنید ",
          items: [
            { description: "پذیرایی: آجیل خوری، شکالتخوری، شیرینی خوری." },
            { description: "تزئینی: گلدان، تنگ، چراغ تزئینی." },
          ],
        },
        {
          title: "تناسب اندازه با فضا را بسنجید",
          items: [
            { description: "ظروف بزرگ مناسب میز اصلی یا کنسول هستند." },
            {
              description: `مدلهای کوچک تر برای میز جلو مبلی یا بوفه ایده آلاند.`,
            },
          ],
        },
        {
          title: "طرح قلمزنی متناسب با فضا را انتخاب کنید",
          items: [
            { description: "گل و مرغ: برای فضاهای گرم و خانوادگی." },
            { description: "اسلیمی و هندسی: برای فضاهای رسمی و تشریفاتی." },
          ],
        },
        {
          title: "به کیفیت آبکاری دقت کنید",
          items: [
            { description: "آبکاری باید یکدست، بدون لکه و درخشنده باشد." },
            {
              description: ` در نور طبیعی هم باید جلوه زیبایی داشته باشد، نه فقط در نور مصنوعی.`,
            },
          ],
        },
        {
          title: "هماهنگی با سبک دکوراسیون",
          items: [
            {
              description:
                " زرینه با مبلمان کالسیک و بوفه چوبی جلوه بیشتری پید ا می کند.",
            },
            {
              description: `برای خانه های مدرن، می توان از مدل های ساده تر و مینیمال استفاده کرد. `,
            },
          ],
        },
        {
          title: "بودجه بندی و آینده نگری",
          items: [
            {
              description:
                "ابتدا اقالم پرکاربردتر را بخرید و سپس به تکمیل ست بپردازید.",
            },
            {
              description:
                "تهیه ست کامل عالوه بر جلوه یکپارچه، ارزش خرید را نیز باال می برد.",
            },
          ],
        },
      ],
    },
    faq: {
      title: "سوالات متداول درباره محصولات زرینه",
      items: [
        {
          title: "آیا محصولات زرینه سنگیناند؟",
          description:
            "بله، وزن بیشتر معموالً به دلیل استفاده از فلز مرغوب و ضخیم تر است که استحکام و ماندگاری را افزایش می دهد.",
        },
        {
          title: "آبکاری طالیی ماندگار است؟",
          description:
            "در صورت شستوشو با پارچه نرم و عدم استفاده از مواد ساینده، آبکاری سالها درخشش خود را حفظ می کند.",
        },
        {
          title: "آیا می توان به صورت ست تهیه کرد؟",
          description:
            "بله، بسیاری از مدل ها در قالب سرویس کامل شامل چند نوع ظرف هم طرح عرضه می شوند.",
        },
      ],
    },
  };

  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=زرینه&page=1`,
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
        <h1>محصولات زرینه قلم زنی کیمیا ترنج</h1>
        <CategoryClient
          categoryName="زرینه"
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
            <ul className={styles.itemList}>
              {seoData.buyingGuide.items.map((item, i) => (
                <li key={i}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <ul className={styles.itemList}>
                    {item.items.map((item, i) => (
                      <li key={i}>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
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
