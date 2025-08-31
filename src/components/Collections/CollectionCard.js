// src/components/Collections/CollectionCard.jsx
import Link from "next/link";
import Image from "next/image";
import styles from "./CollectionCard.module.css";

export default function CollectionCard({ collection }) {
  return (
    <Link
      href={`/collection/${collection.id}`}
      className={styles.cardLink}
      aria-label={collection.title}
    >
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={collection.image || "/placeholder.jpg"}
            alt={collection.title}
            className={styles.image}
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <h3 className={styles.title}>{collection.title}</h3>
      </div>
    </Link>
  );
}
