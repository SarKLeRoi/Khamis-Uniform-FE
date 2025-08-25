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

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const isHebrew = lang === "he";

  return (
    <>
      <Head>
        <title>
          {isHebrew
            ? "מדיניות פרטיות | חמיס יוניפורם"
            : "Privacy Policy | Khamis Uniform"}
        </title>
        <meta
          name="description"
          content={
            isHebrew
              ? "מדיניות הפרטיות של אתר חמיס יוניפורם – מידע על איסוף, שימוש ואבטחת נתונים."
              : "Privacy policy of Khamis Uniform – information on data collection, use, and protection."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://khamisuniform.com/privacy" />
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
                ? "מדיניות פרטיות של חמיס יוניפורם"
                : "Privacy Policy of Khamis Uniform"}
            </h1>
            <div className="legal-banner">
              <h2>
                {isHebrew
                  ? "מדיניות פרטיות של חמיס יוניפורם"
                  : "Privacy Policy of Khamis Uniform"}
              </h2>
            </div>
            <div className="legal-description">
              <p>
                {isHebrew
                  ? "חברת חמיס יוניפורם מכבדת את פרטיות המשתמשים באתר שלה ופועלת בהתאם להוראות הדין להגנה על פרטיותם."
                  : "Khamis Uniform respects the privacy of users on its website and operates in accordance with applicable data protection laws."}
              </p>

              <h3>
                {isHebrew
                  ? "1. איסוף ושימוש במידע"
                  : "1. Collection and Use of Information"}
              </h3>
              <p>
                {isHebrew ? (
                  <>
                    בעת שימושך באתר או יצירת קשר, ייתכן שתידרש למסור מידע אישי
                    כגון שם וטלפון.
                    <br />
                    מסירת המידע נעשית מרצונך החופשי, ואי מסירתו עלולה להגביל את
                    יכולתנו להעניק מענה לפנייתך.
                    <br />
                    המידע שתמסור יישמר לצורך יצירת קשר ושיפור השירות.
                  </>
                ) : (
                  <>
                    When using the site or contacting us, you may be asked to
                    provide personal information such as name and phone number.
                    <br />
                    Providing this information is voluntary; however, without
                    it, we may not be able to respond to your inquiry.
                    <br />
                    The provided data will be stored for communication and
                    service improvement.
                  </>
                )}
              </p>

              <h3>
                {isHebrew
                  ? "2. העברת מידע לצד שלישי"
                  : "2. Disclosure to Third Parties"}
              </h3>
              <p>
                {isHebrew ? (
                  <>
                    המידע לא יועבר לצדדים שלישיים אלא אם נדרש לכך על פי חוק או
                    לצורך אספקת השירותים באמצעות גורמים חיצוניים, ובהתאם
                    להסכמתך.
                  </>
                ) : (
                  <>
                    Your information will not be shared with third parties
                    unless required by law or for service delivery through
                    third-party providers, and subject to your consent.
                  </>
                )}
              </p>

              <h3>{isHebrew ? "3. אבטחת מידע" : "3. Data Security"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    החברה משתמשת באמצעים מקובלים לאבטחת המידע שנאסף באתר, אך
                    אינה יכולה להבטיח באופן מוחלט הגנה מפני גישה לא מורשית.
                  </>
                ) : (
                  <>
                    The Company employs standard security measures to protect
                    collected data but cannot fully guarantee protection from
                    unauthorized access.
                  </>
                )}
              </p>

              <h3>{isHebrew ? "4. עוגיות (Cookies)" : "4. Cookies"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    האתר עושה שימוש בקובצי cookies לשם תפעולו התקין, ניתוח שימוש
                    ושיפור חווית המשתמש. תוכל לשנות את הגדרות הדפדפן כדי לחסום
                    או למחוק אותם.
                  </>
                ) : (
                  <>
                    The site uses cookies for proper operation, analytics, and
                    user experience improvements. You can modify your browser
                    settings to block or delete them.
                  </>
                )}
              </p>

              <h3>
                {isHebrew
                  ? "5. עיון, תיקון ומחיקת מידע"
                  : "5. Access, Correction, and Deletion of Information"}
              </h3>
              <p>
                {isHebrew ? (
                  <>
                    באפשרותך לפנות אלינו ולבקש לעיין, לתקן או למחוק את פרטיך,
                    בהתאם להוראות חוק הגנת הפרטיות.
                  </>
                ) : (
                  <>
                    You may contact us to request access, correction, or
                    deletion of your personal data in accordance with privacy
                    protection laws.
                  </>
                )}
              </p>

              <h3>{isHebrew ? "6. שינויים במדיניות" : "6. Policy Changes"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    החברה שומרת לעצמה את הזכות לשנות מדיניות זו מעת לעת. כל
                    שינוי מהותי יוצג בעמוד זה.
                  </>
                ) : (
                  <>
                    The Company reserves the right to change this policy from
                    time to time. Any material changes will be posted on this
                    page.
                  </>
                )}
              </p>

              <h3>{isHebrew ? "7. יצירת קשר" : "7. Contact"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    לפניות בנושאי פרטיות ניתן ליצור קשר בטלפון או וואטסאפ:
                    972-46-57606
                  </>
                ) : (
                  <>
                    For privacy-related inquiries, you can contact us via phone
                    or WhatsApp: 972-46-57606
                  </>
                )}
              </p>
              <p>
                {isHebrew ? (
                  <>עודכן לאחרונה: מאי 2025</>
                ) : (
                  <>Last updated: May 2025</>
                )}
              </p>
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
    he: { home: "ראשי" },
    ar: { home: "الرئيسية" },
    en: { home: "Home" },
  }[lang] || { home: "Home" };
  const navLabels = {
    he: {
      home: "חזרה לעמוד ראשי",
    },
    en: {
      home: "Back to homepage",
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
