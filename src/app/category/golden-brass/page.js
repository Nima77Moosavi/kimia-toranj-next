import { API_URL } from "@/config/config";
import next from "next";

export default async function BrassSamovarPage() {
  const collectionRes = await fetch(`${API_URL}api/store/collection/7`, {
    next: { revalidate: 300 },
  });
  const collection = collectionRes.ok ? await collectionRes.ok : {};

  const productRes = await fetch(
    `${API_URL}api/store/products/?collection=سماور برنجی&page=1`,
    { next: { revalidate: 60 } }
  );
  const productsData = productRes.ok
    ? await productRes.json()
    : { results: [] };

  return (
    <>
      <Header />
      <QalamzaniClient
        initialCollection={collection}
        initialProducts={productsData.results}
        initialHasMore={!!productsData.next}
      />
    </>
    <div className={styles.pageContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              اصالت هنر فلزکاری اصفهان در نقش و طرحی ماندگار
            </h2>
            <p className={styles.heroSubtitle}>
              قلمزنی یکی از اصیل ترین شاخه های هنر فلزکاری ایران است که با حکاکی
              طرح های اسلیمی، گل و مرغ یا نقوش هندسی روی فلز، اثری ماندگار و
              هنرمندانه خلق می کند. محصولات قلمزنی کیمیا ترنج، نه فقط یک وسیله
              کاربردی، بلکه بخشی از فرهنگ و هنر ایرانی اند که حضورشان، فضایی
              باشکوه و اصیل به خانه و محل کار شما می بخشد.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              src={collection.image || "/images/handmade-samovar-brass.jpg"}
              alt={collection.title || "خاتم کاری"}
              className={styles.heroImg}
            />
          </div>
        </section>

  );
}
