// src/components/Bestsellers/Bestsellers.jsx
import Link from "next/link";
import { MdTrendingUp } from "react-icons/md";
import BestsellersSlider from "./BestsellersSlider";
import styles from "./Bestsellers.module.css";

export default async function Bestsellers() {
  // ✅ Fetch products on the server for SEO
  const res = await fetch(
    "https://kimiatoranj-api.liara.run/api/store/products/",
    { next: { revalidate: 60 } } // ISR: revalidate every 60 seconds
  );

  if (!res.ok) {
    // You can render an error UI here if needed
    return <div className={styles.error}>خطا در بارگذاری محصولات</div>;
  }

  const { results } = await res.json();
  const products = Array.isArray(results) ? results.slice(0, 10) : [];

  return (
    <div className={styles.bestsellersContainer}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>محصولات پرفروش</h2>
          <MdTrendingUp className={styles.icon} />
        </div>
        <Link href="/shop" className={styles.shopLink}>
          مشاهده همه محصولات
        </Link>
      </div>

      {/* SLIDER */}
      <BestsellersSlider products={products} />
    </div>
  );
}
