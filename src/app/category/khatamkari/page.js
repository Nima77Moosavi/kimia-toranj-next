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
        <CategoryClient
          categoryName="خاتم کاری"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
