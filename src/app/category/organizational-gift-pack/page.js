import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryClient from "@/components/CategoryClient/CategoryClient";
import styles from "./OrganizationalGiftPack.module.css";

const API_URL = "https://api.kimiatoranj.com/";

export const metadata = {
  title: "پک هدیه سازمانی | هدایای شرکتی لوکس و سفارشی",
  description:
    "مجموعه‌ای از پک‌های هدیه سازمانی شیک و باکیفیت، مناسب برای مناسبت‌های رسمی، قدردانی از کارکنان و مشتریان. امکان سفارشی‌سازی و ارسال سریع.",
};

export default async function OrganizationalGiftPackPage() {
  const productsRes = await fetch(
    `${API_URL}api/store/products/?collection=پک هدیه سازمانی&page=1`,
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
          categoryName="پک هدیه سازمانی"
          initialProducts={productsData.results}
          initialHasMore={!!productsData.next}
        />
      </div>

      <Footer />
    </>
  );
}
