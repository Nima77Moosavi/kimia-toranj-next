<div className={styles.collectionsRow}>
          {subCollections.map((collection) => {
            const href = collection.landing_page_url
              ? `/category/${collection.landing_page_url}`
              : `/shop?collection=${encodeURIComponent(collection.title)}`;

            return (
              <div key={collection.id} className={styles.collectionCard}>
                <Link href={href} className={styles.imageLink}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={collection.image || "/placeholder.jpg"}
                      alt={collection.title}
                      fill
                      className={styles.collectionImage}
                      unoptimized
                    />
                    <div className={styles.overlay}>
                      <h3 className={styles.description}>{collection.title}</h3>
                    </div>
                  </div>
                </Link>

                {/* <Link href={href} className={styles.viewButton}>
                  مشاهده کنید
                </Link> */}
              </div>
            );
          })}
        </div>