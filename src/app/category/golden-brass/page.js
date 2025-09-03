import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./GoldenBrass.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "زرینه | خرید محصولات زرینه",
  description:
    "مجموعه‌ای از محصولات زرینه شیک و باکیفیت، مناسب برای دکوراسیون و هدیه. خرید مستقیم از فروشگاه صنایع دستی کیمیا ترنج.",
};

export default async function GoldenBrassPage() {
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
        <CategoryClient
          categoryName="زرینه"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
