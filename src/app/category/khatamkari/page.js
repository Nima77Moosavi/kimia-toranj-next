import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./Khatamkari.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "خاتم کاری | خرید محصولات خاتم کاری اصفهان",
  description:
    "مجموعه‌ای فاخر از محصولات خاتم کاری اصفهان شامل جعبه، میز، قاب و هدایای نفیس. خرید مستقیم از فروشگاه صنایع دستی کیمیا ترنج.",
};

export default async function KhatamkariPage() {
  // Empty SEO data structure for later population
  const seoData = {
    hero: { title: "", description: "", image: "" },
    productType: {
      title: "",
      description: "",
      items: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
      ],
    },
    features: {
      title: "",
      description: "",
      items: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
      ],
    },
    decoration: { title: "", description: "" },
    buyingGuide: {
      title: "",
      description: "",
      items: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
      ],
    },
    faq: {
      title: "",
      items: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
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
            <p className={styles.sectionDesc}>{seoData.productType.description}</p>
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
            <p className={styles.sectionDesc}>{seoData.decoration.description}</p>
          </section>
        )}

        {/* Buying Guide */}
        {seoData.buyingGuide.title && (
          <section>
            <h2 className={styles.sectionTitle}>{seoData.buyingGuide.title}</h2>
            <p className={styles.sectionDesc}>{seoData.buyingGuide.description}</p>
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
