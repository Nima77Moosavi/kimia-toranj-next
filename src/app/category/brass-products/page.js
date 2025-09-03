import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./BrassProducts.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "محصولات برنجی | خرید ظروف و دکوری‌های برنجی",
  description:
    "مجموعه‌ای از محصولات برنجی شامل ظروف پذیرایی، دکوری و هدایای نفیس. خرید مستقیم از فروشگاه صنایع دستی کیمیا ترنج.",
};

export default async function BrassProductsPage() {
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
        <CategoryClient
          categoryName="محصولات برنجی"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
