import React, { useState, useEffect } from "react";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";
import Script from "next/script";
import { useLanguage } from "../context/LanguageContext";
import Head from "next/head";
import Logo from "../components/Logo";
import { Globe } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
export default function AccessibilityStatement() {
  const { lang } = useLanguage();
  const isHebrew = lang === "he";

  return (
    <>
      <Head>
        <title>
          {isHebrew
            ? " דף לא נמצא -  404 | חמיס יוניפורם"
            : " 404 - Page Not Found | Khamis Uniform"}
        </title>
        <meta name="robots" content="noindex" />
        <meta name="theme-color" content="#2a2a2a" />
        <link rel="icon" href="/images/favicon_new.ico" />
      </Head>

      <div className={isHebrew ? "rtl" : "ltr"}>
        <Script id="nagishli-script" strategy="afterInteractive">
          {`nl_link = "http://localhost:3000/accessibilityStatement";`}
        </Script>
        <Script src="/nagishli_beta.js"></Script>
        <LegalNavbar />
        <div className="main-wrapper">
          <div className="legal-banner">
            <h2>{isHebrew ? "404 דף לא נמצא" : "404 Page Not Found"}</h2>
          </div>
          <div className="legal-description">
            {isHebrew ? (
              <>
                <p>הדף הזה לא נמצא, נא לחזור לעמוד ראשי.</p>
              </>
            ) : (
              <>
                <p>
                  The following page does not exist, please go back to the
                  homepage.
                </p>
              </>
            )}
          </div>
          <LogoTab />
          <EndingSection />
        </div>
      </div>
    </>
  );
}

const LegalNavbar = () => {
  const [click, setClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  const handleClick = () => setClick(!click);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > 1);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    he: { home: "חזרה לעמוד ראשי" },
    ar: { home: "العودة للصفحة الرئيسية" },
    en: { home: "Back to Homepage" },
  }[lang] || { home: "Back to Homepage" };
  const navLabels = {
    he: {
      home: "חזרה לעמוד ראשי",
    },
    en: {
      home: "Back To Homepage",
    },
  };
  return (
    <div
      className={`navbar ${isSticky ? "sticky-scroll" : ""} ${
        lang === "he" ? "rtl" : "ltr"
      }`}
    >
      {" "}
      {/* Add language class for direction */}
      <div className={`mobile-navbar ${lang === "he" ? "rtl" : "ltr"}`}>
        <Logo />
        <div className="mobile-menu-icon" onClick={handleClick}>
          {click ? (
            <div className="close-icon">&#10005;</div>
          ) : (
            <div className="menu-icon">
              <div className="hamburger-icon">&#9776;</div>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {click && (
          <motion.div
            className={`mobile-menu ${click ? "open" : ""} ${lang}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul className={lang === "he" ? "rtl" : "ltr"}>
              <li>
                <Link legacyBehavior href="/">
                  <a
                    className="navbar-mobile-items"
                    onClick={() => setClick(false)}
                  >
                    {t.home}
                  </a>
                </Link>
              </li>
            </ul>
            <div className="additional-logos">
              <div className="language-toggle-container">
                <button
                  onClick={toggleLanguage}
                  className="language-toggle-button"
                >
                  <div
                    className={`toggle-indicator ${
                      lang === "en" ? "left" : "right"
                    }`}
                  >
                    <Globe size={16} className="globe-icon" />
                  </div>
                  <span
                    className={`label-left ${
                      lang === "en" ? "hidden" : "visible"
                    }`}
                  >
                    English
                  </span>
                  <span
                    className={`label-right ${
                      lang === "en" ? "visible" : "hidden"
                    }`}
                  >
                    עברית
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ul
        className={`desktop-menu ${click ? "hidden" : ""} ${
          lang === "he" ? "rtl" : "ltr"
        }`}
        style={{
          justifyContent: "flex-start",
        }}
      >
        <Logo isSticky={isSticky} />
        <li>
          <Link className="main-title" href="/">
            {t.home}
          </Link>
        </li>
        <div className="language-toggle-container">
          <button onClick={toggleLanguage} className="language-toggle-button">
            <div
              className={`toggle-indicator ${lang === "en" ? "left" : "right"}`}
            >
              <Globe size={16} className="globe-icon" />
            </div>
            <span
              className={`label-left ${lang === "en" ? "hidden" : "visible"}`}
            >
              English
            </span>
            <span
              className={`label-right ${lang === "en" ? "visible" : "hidden"}`}
            >
              עברית
            </span>
          </button>
        </div>
      </ul>
    </div>
  );
};
