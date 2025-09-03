import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./Frame.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "قاب | خرید قاب‌های تزئینی و هنری",
  description:
    "مجموعه‌ای از قاب‌های تزئینی و هنری، مناسب برای دکوراسیون منزل و محل کار. خرید مستقیم از فروشگاه صنایع دستی کیمیا ترنج.",
};

export default async function FramePage() {
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
        <CategoryClient
          categoryName="قاب"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
