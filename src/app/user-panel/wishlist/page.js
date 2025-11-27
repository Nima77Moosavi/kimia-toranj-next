// app/user-panel/wishlist/page.jsx
"use client";

import WishlistItems from "@/components/WishlistItems/WishlistItems";

export const metadata = {
  title: "فروشگاه کیمیا ترنج | صنایع دستی اصفهان ",
  description:
    "خرید صنایع دستی اصیل اصفهان و ایران؛ خاتم‌کاری، قلم‌زنی، مینیاتور، سماور برنجی، پک هدیه سازمانی و محصولات دست‌ساز با کیفیت.",
};

export default function WishlistPage() {
  return <WishlistItems />;
}
