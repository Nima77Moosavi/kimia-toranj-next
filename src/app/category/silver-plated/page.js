import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./SilverPlated.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "شبه نقره | خرید ظروف و محصولات شبه نقره",
  description:
    "مجموعه‌ای از ظروف و محصولات شبه نقره شیک و باکیفیت، مناسب برای پذیرایی و دکوراسیون. خرید مستقیم از فروشگاه صنایع دستی کیمیا ترنج.",
};

export default async function SilverPlatedPage() {
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=شبه نقره&page=1`,
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
          categoryName="شبه نقره"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
