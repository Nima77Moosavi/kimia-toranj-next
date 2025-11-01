import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ShopClient from "./ShopClient";
import FooterMenu from "@/components/FooterMenu/FooterMenu";

export const metadata = {
  title: "فروشگاه صنایع دستی | کیمیا ترنج",
  description:
    "خرید آنلاین محصولات دست‌ساز ایرانی در کیمیا ترنج. دسته‌بندی‌ها، فیلترها و مرتب‌سازی پیشرفته؛ ارسال سریع و پشتیبانی دوستانه.",
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <ShopClient />
      <Footer />
      <FooterMenu />
    </>
  );
}
