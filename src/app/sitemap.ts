// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kimiatoranj.com";

  // 1️⃣ Fetch all products from your API
  const res = await fetch(
    "https://api.kimiatoranj.com/api/store/products/?page_size=1000",
    { next: { revalidate: 3600 } } // revalidate every hour
  );
  const data = await res.json();

  const products = Array.isArray(data)
    ? data
    : Array.isArray(data.results)
    ? data.results
    : [];

  // 2️⃣ Map them to product URLs
  const productRoutes: MetadataRoute.Sitemap = products.map((p: any) => ({
    url: `${baseUrl}/product/${p.url_title}-${p.id}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // 3️⃣ Add static + blog routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "/login",
    "/installment-payment",
    "/faq",
    "/shop",
    "/gift-selector",
    "/category/brass-samovar",
    "/category/brass-products",
    "/category/silver-plated",
    "/category/golden-brass",
    "/category/qalamzani",
    "/category/mirror-candleholder",
    "/category/organizational-gift-pack",
    "/category/khatamkari",
    "/blog",
    "/post/Enlivening-your-home-with-iranian-arts-and-crafts",
    "/post/Isfahan-Handicrafts-A-lasting-legacy-from-the-heart-of-Iranian-history",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
