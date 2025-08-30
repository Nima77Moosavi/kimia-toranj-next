"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Collections.module.css";
import CollectionCardSkeleton from "./CollectionCard.Skeleton";

export default function Collections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(
          "https://kimiatoranj-api.liara.run/api/store/collections/"
        );
        if (!response.ok) throw new Error("مشکل در دریافت اطلاعات");
        const data = await response.json();
        setCollections(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
        console.log(err);
        
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  if (error) {
    return <div className={styles.error}>خطا: {error}</div>;
  }

  return (
    <div className={styles.collections}>
      <h2 className={styles.sectionTitle}>دسته‌بندی محصولات</h2>
      <div className={styles.row}>
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
              <CollectionCardSkeleton key={i} />
            ))
          : collections.map((collection) => {
              const href = collection.landing_page_url
                ? `/category/${collection.landing_page_url}`
                : `/shop?collection=${encodeURIComponent(collection.title)}`;

              return (
                <Link
                  href={href}
                  key={collection.id}
                  className={styles.collectionCard}
                  style={{
                    backgroundImage: `url(${collection.image})`,
                  }}
                >
                  <Image
                    src={collection.image || "/placeholder.jpg"} // put placeholder.jpg in /public
                    alt={collection.title}
                    loading="lazy"
                    className={styles.collectionImage}
                    width={400} // adjust to your design
                    height={300}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.description}>
                      {collection.description || collection.title}
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
