"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import axiosInstance from "@/utils/axiosInstance";
import { API_URL } from "@/config/config";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";

import styles from "./HeaderDesktop.module.css";

// Icons
import { IoSearch, IoBagOutline, IoHelpCircleOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { TbDeviceIpadHorizontalStar } from "react-icons/tb";
import { PiArticleBold } from "react-icons/pi";
import { GoGift } from "react-icons/go";

export default function HeaderDesktop() {
  const [categories, setCategories] = useState([]);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef();

  const router = useRouter();

  // Zustand stores
  const cartCount = useCartStore((state) => state.cartCount());
  const fetchCartFromBackend = useCartStore((state) => state.fetchCartFromBackend);
  const { isLoggedIn, checkAuth } = useAuthStore();

  // Fetch cart + auth on mount
  useEffect(() => {
    fetchCartFromBackend();
    checkAuth();
  }, [fetchCartFromBackend, checkAuth]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get(`${API_URL}api/store/collections/`);
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  // Hover handlers with delay
  const openMenu = () => {
    clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 150);
  };

  return (
    <header className={styles.header}>
      {/* Row 1: Logo, Search, Login, Cart */}
      <div className={styles.topRow}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="کیمیاترنج"
            className={styles.logo}
            width={160}
            height={50}
            priority
          />
        </Link>

        <div className={styles.searchContainer}>
          <form
            className={styles.searchBox}
            onSubmit={(e) => {
              e.preventDefault();
              // implement search if needed
            }}
          >
            <input type="text" placeholder="جستجو کنید..." />
            <button type="submit" className={styles.searchIcon}>
              <IoSearch />
            </button>
          </form>
        </div>

        <div className={styles.loginButton}>
          <Link href={isLoggedIn ? "/user-panel" : "/login"}>
            <button>{isLoggedIn ? "پنل کاربری" : "ورود | ثبت نام"}</button>
          </Link>
        </div>

        <div className={styles.icons}>
          <Link href="/user-panel/cart">
            <span className={styles.cartIcon}>
              <FaCartShopping />
            </span>
            <span className={styles.cartItemsCount}>{cartCount}</span>
          </Link>
        </div>
      </div>

      {/* Row 2: Horizontal Menu */}
      <nav className={styles.navMenu}>
        <ul>
          <li>
            <Link href="/">
              <FiHome /> صفحه اصلی
            </Link>
          </li>

          {/* Categories with overlay */}
          {/* <li
            className={styles.dropdown}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <span>دسته‌بندی محصولات</span>
            {hovered && (
              <div
                className={styles.overlayMenu}
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <div className={styles.overlayContent}>
                  {categories.map((cat) => (
                    <div key={cat.id} className={styles.categoryBlock}>
                      <Link href={`/category/${cat.landing_page_url}`}>
                        <h4>{cat.title}</h4>
                      </Link>
                      {cat.subcollections?.length > 0 && (
                        <ul>
                          {cat.subcollections.map((sub) => (
                            <li key={sub.id}>
                              <Link href={`/category/${sub.landing_page_url}`}>
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li> */}

          <li>
            <Link href="/shop">
              <IoBagOutline /> فروشگاه
            </Link>
          </li>
          <li>
            <Link href="/gift-selector">
              <GoGift /> کادو چی بخرم
            </Link>
          </li>
          <li>
            <Link href="/">
              <TbDeviceIpadHorizontalStar /> اخذ نمایندگی
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <PiArticleBold /> مقالات
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <IoHelpCircleOutline /> سوالات متداول
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
