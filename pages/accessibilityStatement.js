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
            ? "הצהרת נגישות | חמיס יוניפורם"
            : "Accessibility Statement | Khamis Uniform"}
        </title>
        <meta
          name="description"
          content={
            isHebrew
              ? "הצהרת נגישות לאתר חמיס יוניפורם – מידע על התאמות, תוסף נגישות ושיפור חוויית השימוש באתר לאנשים עם מוגבלות."
              : "Accessibility statement for Khamis Uniform website – details about adjustments, the accessibility plugin, and improving user experience for people with disabilities."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://khamisuniform.com/accessibilityStatement"
        />
        <meta name="theme-color" content="#2a2a2a" />
        <link rel="icon" href="/images/favicon_new.ico" />
      </Head>

      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        {isHebrew ? "דלג לתוכן הראשי" : "Skip to main content"}
      </a>
      <div className={isHebrew ? "rtl" : "ltr"} lang={isHebrew ? "he" : "en"}>
        <Script id="nagishli-script" strategy="afterInteractive">
          {`nl_link = "http://localhost:3000/accessibilityStatement";`}
        </Script>
        <Script src="/nagishli_beta.js"></Script>
        <LegalNavbar />
        <div className="main-wrapper">
          <main
            id="main-content"
            role="main"
            aria-label={isHebrew ? "תוכן ראשי" : "Main content"}
          >
            {/* Visually hidden h1 for screen readers */}
            <h1 className="visually-hidden">
              {isHebrew
                ? "הצהרת נגישות של חמיס יוניפורם"
                : "Accessibility Statement of Khamis Uniform"}
            </h1>
            <div className="legal-banner">
              <h2>{isHebrew ? "הצהרת נגישות" : "Accessibility Statement"}</h2>
            </div>
            <div className="legal-description">
              {isHebrew ? (
                <>
                  <p>
                    חברת חמיס יוניפורם מחויבת להנגשת אתר האינטרנט שלה לכלל
                    האוכלוסייה, לרבות אנשים עם מוגבלות. האתר עומד כיום ברוב
                    דרישות תקן הנגישות הישראלי (ת"י 5568) וברמת AA של תקן
                    הבינלאומי WCAG 2.1.
                  </p>
                  <p>
                    באתר בוצעו התאמות רבות לשיפור הנגישות, כולל: ניווט מקלדת
                    מלא, קישורי דילוג לתוכן, מבנה כותרות תקין, ניגודיות צבעים
                    מספקת, אפשרות לשינוי שפה, ותמיכה בקוראי מסך.
                  </p>
                  <p>
                    האתר כולל תוסף נגישות של "נגיש לי" (Nagishli) להנגשה נוספת.
                  </p>
                  <p>
                    אם נתקלתם בבעיה או יש לכם הצעה לשיפור, נשמח שתפנו אלינו דרך
                    טלפון או וואטסאפ: 972-46-57606
                  </p>
                  <p>עודכן לאחרונה: יוני 2024</p>
                </>
              ) : (
                <>
                  <p>
                    Khamis Uniform is committed to making its website accessible
                    to the entire population, including people with
                    disabilities. The site now substantially complies with the
                    Israeli accessibility standard (IS 5568) and WCAG 2.1 Level
                    AA.
                  </p>
                  <p>
                    We have implemented many accessibility improvements,
                    including: full keyboard navigation, skip links, proper
                    heading structure, sufficient color contrast, language
                    switching, and screen reader support.
                  </p>
                  <p>
                    The site also includes the “Nagishli” accessibility plugin
                    for additional accessibility options.
                  </p>
                  <p>
                    If you encounter any accessibility issues or have
                    suggestions for improvement, please contact us via phone or
                    WhatsApp: 972-46-57606
                  </p>
                  <p>Last updated: June 2024</p>
                </>
              )}
            </div>
            <LogoTab />
            <EndingSection />
          </main>
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
                <Link legacyBehavior href="#">
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
