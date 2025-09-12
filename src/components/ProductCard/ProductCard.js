import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { formatPrice } from "@/utils/formatPrice";
import { toPersianDigits } from "@/utils/faDigits";

export default function ProductCard({ product }) {
  const productLink = `/product/${product.url_title}-${product.id}`;
  const variant = product.variants?.[0] || {};
  const stock = variant.stock ?? 0;

  // Always work with a safe array
  const promotions = Array.isArray(product.promotions)
    ? product.promotions
    : [];
  const hasPromotion = promotions.length > 0;
  const discountPercent = hasPromotion ? promotions[0]?.discount ?? 0 : 0;

  const discountedPrice =
    hasPromotion && variant.price
      ? Math.round(variant.price * (1 - discountPercent / 100))
      : variant.price ?? 0;

  const imageSrc =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0].image
      : "/placeholder.jpg"; // put placeholder.jpg in /public

  return (
    <Link
      href={productLink}
      className={styles.cardLink}
      aria-label={`مشاهده ${product.title}`}
    >
      <div className={styles.card}>
        <Image
          src={imageSrc}
          alt={product.title}
          className={styles.img}
          loading="lazy"
          width={200}
          height={190}
          unoptimized // ✅ bypass Next.js optimizer to avoid timeouts/null
        />

        <h2 className={styles.title}>{toPersianDigits(product.title)}</h2>

        {stock > 0 && stock < 4 && (
          <span className={styles.stock}>
            تنها {toPersianDigits(stock)} عدد در انبار باقی مانده
          </span>
        )}

        {stock > 0 ? (
          <div className={styles.priceWrapper}>
            {hasPromotion && variant.price && (
              <>
                <span className={styles.oldPrice}>
                  {formatPrice(variant.price)} تومان
                </span>
                <span className={styles.discountBadge}>
                  {toPersianDigits(discountPercent)}٪ تخفیف
                </span>
              </>
            )}
            <button className={styles.price}>
              {formatPrice(discountedPrice)} تومان
            </button>
          </div>
        ) : (
          <button className={styles.callButton} disabled>
            تماس بگیرید
          </button>
        )}
      </div>
    </Link>
  );
}
