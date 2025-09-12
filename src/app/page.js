import Header from "@/components/Header/Header";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Bestsellers from "@/components/Bestsellers/Bestsellers";
import styles from "./page.module.css";
import Highlights from "@/components/Highlights/Highlights";
import Collections from "@/components/Collections/Collections";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";
import SpecialProducts from "@/components/SpecialProducts/SpecialProducts";
import FeaturesLine from "@/components/FeaturesLine/FeaturesLine";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Global header */}
      <Header />

      <main className={styles.main}>
        {/* Hero / Banner */}
        <BannerSlider />

        <Highlights />

        <Collections />

        {/* Bestsellers section */}
        <Bestsellers />

        <SpecialOffer />

        <SpecialProducts />

        <FeaturesLine />

        <Footer />

        {/* You can add more sections here: Highlights, Collections, etc. */}
      </main>

      <footer className={styles.footer}>
        {/* Your real footer content here */}
        <p>© {new Date().getFullYear()} کیمیا ترنج</p>
      </footer>
    </div>
  );
}
