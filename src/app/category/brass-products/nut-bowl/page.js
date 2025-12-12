import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./SubCategory.module.css";
import FooterMenu from "@/components/FooterMenu/FooterMenu";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "آجیل‌خوری برنجی | فروشگاه کیمیا ترنج",
  description:
    "آجیل‌خوری برنجی با طراحی سنتی و کیفیت ممتاز؛ مناسب پذیرایی و دکور خانه. تضمین اصالت کالا و ارسال مطمئن. خرید سریع: 09920784900.",
};

export default async function KashkulPage() {
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection_id=3`,
    { next: { revalidate: 60 } }
  );

  const productsData = productsRes.ok
    ? await productsRes.json()
    : { results: [], next: null };

  return (
    <>
      <Header />

      <div className={styles.pageContainer}>
        <h1 className={styles.title}>محصولات سماور شبه‌نقره کیمیا ترنج</h1>

        <CategoryClient
          categoryId={3}
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
        <div className={styles.seoSection}></div>
      </div>
      <FooterMenu />
      <Footer />
    </>
  );
}
