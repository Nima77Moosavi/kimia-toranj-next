import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./BrassSamovar.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "خرید سماور برنجی سنتی و مدرن | جلوه ای از اصالت ایرانی",
  description:
    "سماور برنجی نماد اصالت چای نوشی ایرانی؛ ترکیبی از کاربرد روزمره و هنر دست. مشاهده مدل‌های زغالی، برقی و تزئینی.",
};

export default async function BrassSamovarPage() {
  // Fetch first page of products for this category
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=سماور برنجی&page=1`,
    { next: { revalidate: 60 } } // revalidate every 60s
  );

  const productsData = productsRes.ok
    ? await productsRes.json()
    : { results: [], next: null };

  return (
    <>
      <Header />

      <div className={styles.pageContainer}>
        <CategoryClient
          categoryName="سماور برنجی"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
