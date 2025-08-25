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

export default function Blog() {
  const { lang } = useLanguage();
  const isHebrew = lang === "he";

  // Accessibility: language and direction
  const pageLang = isHebrew ? "he" : "en";

  return (
    <>
      <Head>
        <title>בלוג חמיס יוניפורם – טיפים ועצות לעולם הלבוש המקצועי</title>
        <meta
          name="description"
          content="בלוג חמיס יוניפורם – טיפים מקצועיים לעולם הלבוש המקצועי, יוניפורם איכותי, ועצות לבחירת בגדי עבודה מתאימים לכל תחום."
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://khamisuniform.com/blog" />
        <meta name="theme-color" content="#2a2a2a" />
        <link rel="icon" href="/images/favicon_new.ico" />
      </Head>
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        {isHebrew ? "דלג לתוכן הראשי" : "Skip to main content"}
      </a>
      <div className={isHebrew ? "rtl" : "ltr"} lang={pageLang}>
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
              בלוג חמיס יוניפורם – טיפים ועצות לעולם הלבוש המקצועי
            </h1>
            <div className="legal-banner">
              <h2>בלוג חמיס יוניפורם – טיפים ועצות לעולם הלבוש המקצועי</h2>
            </div>
            <div className="legal-description">
              <section>
                <p>
                  בעולם הלבוש המקצועי, איכות ובטיחות הם המפתח להצלחה. כל תפר, כל
                  בד, כל עיצוב – חייבים לעמוד בסטנדרטים הגבוהים ביותר, עם דגש על
                  נוחות, עמידות ובטיחות. כאן נכנסת לתמונה חמיס יוניפורם – חברה
                  בעלת ניסיון של מעל 25 שנה בתחום הלבוש המקצועי, יוניפורם איכותי
                  ופתרונות מותאמים אישית לכל תחום.
                </p>
              </section>
              <section>
                <h3>מה זה יוניפורם מקצועי ולמה הוא כל כך חשוב?</h3>
                <p>
                  יוניפורם מקצועי הוא לא רק "בגדים לעבודה" – אלא פתרון כולל
                  לנוחות, בטיחות וזהות מקצועית במקום העבודה. מדובר בבגדים
                  שעומדים בתקני איכות גבוהים, מספקים הגנה מפני סיכונים, ומשקפים
                  את הזהות המקצועית של הארגון.
                </p>
                <p>
                  למשל, בתחומים כמו רפואה, בנייה, או תעשייה, יוניפורם איכותי
                  יכול להבדיל בין בטיחות לסיכון, ובין נוחות לעבודה קשה.
                </p>
              </section>
              <section>
                <h3>השירותים שלנו – הרבה מעבר ליוניפורם בסיסי</h3>
                <p>
                  בחמיס יוניפורם אנחנו לא רק מוכרים בגדים – אנחנו מתכננים,
                  מתאימים ומספקים פתרונות מותאמים אישית. בין השירותים שאנו
                  מציעים:
                </p>
                <ul>
                  <li>
                    יוניפורם מקצועי לכל תחום – רפואה, בנייה, תעשייה ושירותים
                  </li>
                  <li>עיצוב ותפירה מותאמת אישית לפי דרישות הלקוח</li>
                  <li>הדפסה ותפירה של לוגואים וסמלים מקצועיים</li>
                  <li>ייעוץ בבחירת בדים וצבעים מתאימים לכל סביבת עבודה</li>
                  <li>שירות לקוחות מקצועי ומעקב אחר הזמנות</li>
                  <li>תחזוקה ותיקון של יוניפורם קיים</li>
                </ul>
                <p>
                  אנחנו מלווים את הלקוח מהשלב הראשוני של התכנון, דרך ייצור
                  איכותי, ועד למסירה והתאמה מושלמת של היוניפורם.
                </p>
              </section>
              <section>
                <h3>פרויקטים לדוגמה – תעשייה שעובדת לפי הספר</h3>
                <p>הניסיון שלנו מדבר בעד עצמו. בין הפרויקטים שביצענו:</p>
                <ul>
                  <li>
                    שיפוץ מתקני זיקוק בבז"ן חיפה – כולל החלפת ציודים כבדים
                    ועבודות צנרת מורכבות
                  </li>
                  <li>
                    הקמת תחנת קיטור חדשה (LDS) – עבודה בלחצים וטמפרטורות גבוהים
                  </li>
                  <li>שיפוץ ריאקטור ראשי במפעל גדיב</li>
                  <li>פרויקטים בתחנות כוח, מפעלי מזון, מפעלי כימיה ועוד</li>
                </ul>
                <p>
                  בכל פרויקט אנחנו מביאים שילוב של דיוק הנדסי, ניסיון מוכח,
                  ויכולת לתפקד גם תחת תנאי שטח מאתגרים ולוחות זמנים צפופים.
                </p>
              </section>
              <section>
                <h3>למה לבחור בנו?</h3>
                <ul>
                  <li>✔ ניסיון של מעל 25 שנה</li>
                  <li>✔ צוות מומחים בתחום הצנרת והמתכת</li>
                  <li>✔ היכרות עמוקה עם תקני התעשייה הישראליים והבינלאומיים</li>
                  <li>✔ ליווי צמוד, שירות אישי ומקצועיות ללא פשרות</li>
                </ul>
                <p>
                  רוצים להבטיח שהפרויקט הבא שלכם יתבצע בביטחון, דיוק ועמידה מלאה
                  בדרישות?
                </p>
                <p>פנו אלינו עוד היום – ונשמח לעמוד לשירותכם.</p>
              </section>
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

  return (
    <div
      className={`navbar ${isSticky ? "sticky-scroll" : ""} ${
        lang === "he" ? "rtl" : "ltr"
      }`}
    >
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
        style={{ justifyContent: "flex-start" }}
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
