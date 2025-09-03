import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./MirrorCandleholder.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "آینه شمعدان | خرید انواع آینه و شمعدان سنتی و مدرن",
  description:
    "مجموعه‌ای شیک از آینه و شمعدان‌های سنتی و مدرن، مناسب برای جهیزیه، مراسم و دکوراسیون منزل. خرید مستقیم از فروشگاه صنایع دستی کیمیا ترنج.",
};

export default async function MirrorCandleholderPage() {
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=آینه شمعدان&page=1`,
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
          categoryName="آینه شمعدان"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
