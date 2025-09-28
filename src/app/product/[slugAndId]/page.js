import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ShopClient from "./ShopClient";

const API_BASE = "https://api.kimiatoranj.com/api/store";

export default async function ShopPage({ searchParams }) {
  // Convert to a plain object
  const plainParams = await Promise.resolve(searchParams);

  const params = new URLSearchParams();

  // Add existing search params
  Object.entries(plainParams)
    .filter(([_, v]) => v != null)
    .forEach(([k, v]) => {
      if (Array.isArray(v)) {
        v.forEach(val => params.append(k, String(val)));
      } else {
        params.set(k, String(v));
      }
    });

  // Set default sort if not exists
  if (!params.get("order_by")) {
    params.set("order_by", "price");
  }

  try {
    const [productsRes, collectionsRes] = await Promise.all([
      fetch(`${API_BASE}/products/?${params.toString()}`, {
        next: { revalidate: 60 },
      }),
      fetch(`${API_BASE}/collections/`, { next: { revalidate: 300 } }),
    ]);

    const productsData = productsRes.ok
      ? await productsRes.json()
      : { results: [], next: null };
      
    const collectionsData = collectionsRes.ok ? await collectionsRes.json() : [];

    return (
      <>
        <Header />
        <ShopClient
          initialProducts={productsData.results}
          initialCollections={collectionsData}
          initialHasMore={!!productsData.next}
        />
        <Footer />
      </>
    );
  } catch (error) {
    // Handle fetch errors gracefully
    return (
      <>
        <Header />
        <ShopClient
          initialProducts={[]}
          initialCollections={[]}
          initialHasMore={false}
        />
        <Footer />
      </>
    );
  }
}