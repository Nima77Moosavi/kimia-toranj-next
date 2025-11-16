"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import axiosInstanceNoRedirect from "@/utils/axiosInstanceNoRedirect";
import { formatPrice } from "@/utils/formatPrice";
import { API_URL } from "@/config/config";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";

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
  const [mainCategories, setMainCategories] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const timeoutRef = useRef();
  const debounceRef = useRef();
  const suggestionsRef = useRef();
  const router = useRouter();

  // Zustand stores
  const cartCount = useCartStore((state) => state.cartCount());
  const fetchCartFromBackend = useCartStore(
    (state) => state.fetchCartFromBackend
  );
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
        const { data } = await axios.get(`${API_URL}api/store/collections/`);
        console.log("Categories API response:", data);
        setCategories(data.results || data); // adjust depending on shape
        const mainCategories = data.filter((category) => category.parent === null);
        setMainCategories(mainCategories)
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search suggestions
  useEffect(() => {
    if (!showSuggestions) return;
    const q = searchTerm.trim();
    if (q.length < 2) {
      setSuggestions([]);
      return;
    }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const { data } = await axiosInstanceNoRedirect.get(
          `${API_URL}api/store/products/?title=${encodeURIComponent(q)}`
        );
        setSuggestions(data.results.slice(0, 8));
      } catch {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [searchTerm, showSuggestions]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    if (q) {
      router.push(`/shop?search=${encodeURIComponent(q)}`);
      setShowSuggestions(false);
      setSearchTerm("");
    }
  };

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
            unoptimized
          />
        </Link>

        {/* Search with suggestions */}
        <div className={styles.searchContainer} ref={suggestionsRef}>
          <form className={styles.searchBox} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="جستجو کنید..."
            />
            <button type="submit" className={styles.searchIcon}>
              <IoSearch />
            </button>
          </form>
          {showSuggestions && suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((prod) => (
                <li
                  key={prod.id}
                  className={styles.suggestionItem}
                  onClick={() => {
                    router.push(`/product/${prod.url_title}-${prod.id}`);
                    setShowSuggestions(false);
                    setSearchTerm("");
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {prod.images?.[0]?.image ? (
                      <img
                        src={prod.images[0].image}
                        alt={prod.title}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "#eee",
                        }}
                      >
                        بدون تصویر
                      </div>
                    )}
                    <div>
                      <div className={styles.suggestionTitle}>{prod.title}</div>
                      <div className={styles.suggestionMeta}>
                        {prod.collection?.title}{" "}
                        {formatPrice(
                          prod.variants?.[0]?.price?.toLocaleString() || "0"
                        )}{" "}
                        تومان
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
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
          {/* Categories with overlay */}
          <li
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
                  {mainCategories.map((cat) => (
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
          </li>
          <li>
            <Link href="/">
              <FiHome /> صفحه اصلی
            </Link>
          </li>

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
