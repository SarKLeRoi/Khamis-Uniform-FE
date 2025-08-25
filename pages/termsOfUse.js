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

export default function TermsOfUse() {
  const { lang } = useLanguage();
  const isHebrew = lang === "he";

  return (
    <>
      <Head>
        <title>
          {isHebrew
            ? "תקנון שימוש | חמיס יוניפורם"
            : "Terms of Use | Khamis Uniform"}
        </title>
        <meta
          name="description"
          content={
            isHebrew
              ? "תקנון שימוש באתר חמיס יוניפורם – התנאים לשימוש באתר, אחריות, קניין רוחני ועוד."
              : "Terms of Use for Khamis Uniform website – usage conditions, responsibilities, intellectual property, and more."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://khamisuniform.com/terms" />
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
                ? "תקנון שימוש של חמיס יוניפורם"
                : "Terms of Use of Khamis Uniform"}
            </h1>
            <div className="legal-banner">
              <h2>
                {isHebrew
                  ? "תקנון שימוש באתר חמיס יוניפורם"
                  : "Terms of Use for Khamis Uniform Website"}
              </h2>
            </div>

            <div className="legal-description">
              <p>
                {isHebrew
                  ? "ברוכים הבאים לאתר של חמיס יוניפורם (להלן: 'החברה'). השימוש באתר מהווה הסכמה לתנאים המפורטים במסמך זה. אנא קרא אותו בקפידה."
                  : "Welcome to the website of Khamis Uniform ('Company'). Use of the site constitutes your agreement to the terms set out in this document. Please read them carefully."}
              </p>

              <h3>{isHebrew ? "1. כללי" : "1. General"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    1.1. אתר זה (להלן: "האתר") מופעל ומנוהל על ידי חברת חמיס
                    יוניפורם (להלן: "החברה").
                    <br />
                    1.2. השימוש באתר כפוף לתקנון זה, ומהווה הסכמה מלאה מצדך
                    לתנאים המפורטים בו. אם אינך מסכים לאחד או יותר מהתנאים – הנך
                    מתבקש שלא לעשות שימוש באתר.
                    <br />
                    1.3. התקנון מנוסח בלשון זכר אך מתייחס לנשים וגברים כאחד.
                  </>
                ) : (
                  <>
                    1.1. This website ("Site") is operated and managed by Khamis
                    Uniform ("Company").
                    <br />
                    1.2. Use of the site is subject to this policy and
                    constitutes full agreement with the terms herein. If you do
                    not agree with any part of the terms, please refrain from
                    using the site.
                    <br />
                    1.3. The terms are written in masculine form for
                    convenience, but apply to all genders equally.
                  </>
                )}
              </p>

              <h3>{isHebrew ? "2. תיאור האתר" : "2. Site Description"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    2.1. האתר מציג מידע כללי אודות פעילות החברה, שירותי
                    יוניפורם, תמונות עבודה מורשות, וידאו הדגמה מורשה ואפשרויות
                    יצירת קשר.
                    <br />
                    2.2. האתר הוא אינפורמטיבי בלבד, ואינו מהווה הצעה או התחייבות
                    מכל סוג שהוא מצד החברה.
                    <br />
                    2.3. התמונות והוידאו באתר הינן להמחשה בלבד ומורשים לשימוש
                    מסחרי לצורכי הדגמה.
                    <br />
                  </>
                ) : (
                  <>
                    2.1. The site displays general information about the
                    Company's operations, uniform services, licensed work
                    photos, licensed demonstration video, and contact options.
                    <br />
                    2.2. The site is for informational purposes only and does
                    not constitute an offer or commitment of any kind by the
                    Company.
                    <br />
                    2.3. Images and video on the site are for illustration
                    purposes only and are licensed for commercial use for
                    demonstration purposes.
                    <br />
                  </>
                )}
              </p>

              <h3>{isHebrew ? "3. יצירת קשר" : "3. Contact"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    3.1. האתר מאפשר יצירת קשר עם החברה באמצעות טלפון או וואטסאפ.
                    <br />
                    3.2. השארת פרטים מהווה הסכמה לקבלת פנייה חוזרת מהחברה.
                    <br />
                    3.3. יצירת הקשר כרוכה באישור תקנון זה ומדיניות הפרטיות של
                    האתר.
                    <br />
                  </>
                ) : (
                  <>
                    3.1. The site allows users to contact the Company via a form
                    where name, phone number, email address, and message must be
                    provided.
                    <br />
                    3.2. Submitting your information constitutes consent to be
                    contacted by the Company, including by phone or email.
                    <br />
                    3.3. Filling out the form implies acceptance of this Terms
                    of Use and the site’s Privacy Policy.
                    <br />
                  </>
                )}
              </p>

              <h3>
                {isHebrew
                  ? "4. אחריות ושימוש במידע"
                  : "4. Responsibility and Use of Information"}
              </h3>
              <p>
                {isHebrew ? (
                  <>
                    4.1. השימוש באתר נעשה באחריות המשתמש בלבד.
                    <br />
                    4.2. החברה אינה מתחייבת כי המידע באתר מדויק, שלם או עדכני,
                    ואינה אחראית לכל נזק שייגרם מהסתמכות על המידע המוצג בו.
                    <br />
                    4.3. אין להשתמש במידע לצרכים מסחריים ללא אישור מראש ובכתב
                    מהחברה.
                    <br />
                    4.4. האתר מכיל קישורים לרשתות חברתיות חיצוניות. החברה אינה
                    אחראית לתוכן, מהימנות או זמינות אתרים אלו.
                    <br />
                  </>
                ) : (
                  <>
                    4.1. Use of the site is solely at the user’s responsibility.
                    <br />
                    4.2. The Company makes no guarantees about the accuracy,
                    completeness, or currency of the information on the site,
                    and is not responsible for any damages resulting from
                    reliance on it.
                    <br />
                    4.3. You may not use the content for commercial purposes
                    without prior written permission from the Company.
                    <br />
                    4.4. The site includes links to external social media
                    platforms. The Company is not responsible for their content,
                    reliability, or availability.
                    <br />
                  </>
                )}
              </p>

              <h3>{isHebrew ? "5. שימושים אסורים" : "5. Prohibited Uses"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    5.1. אין לבצע באתר שימוש שעלול לפגוע במשתמשים אחרים, בתשתית
                    האתר או בזכויות צד שלישי.
                    <br />
                    5.2. אין להחדיר קוד זדוני, לנסות לאסוף מידע אוטומטית או
                    להעתיק תכנים ללא רשות.
                    <br />
                  </>
                ) : (
                  <>
                    5.1. Do not use the site in ways that may harm other users,
                    the site infrastructure, or third-party rights.
                    <br />
                    5.2. Do not inject malicious code, attempt to collect data
                    automatically, or copy content without permission.
                    <br />
                  </>
                )}
              </p>

              <h3>
                {isHebrew ? "6. קניין רוחני" : "6. Intellectual Property"}
              </h3>
              <p>
                {isHebrew ? (
                  <>
                    6.1. כל זכויות היוצרים והקניין הרוחני באתר, לרבות טקסטים,
                    עיצובים, גרפיקה ותמונות – שייכים לחברה.
                    <br />
                    6.2. אין להעתיק, לשכפל או להשתמש בחלקים מהאתר לכל מטרה שאינה
                    פרטית ללא אישור בכתב.
                    <br />
                  </>
                ) : (
                  <>
                    6.1. All copyrights and intellectual property on the site,
                    including text, design, graphics, and images, belong to the
                    Company.
                    <br />
                    6.2. You may not copy, reproduce, or use any part of the
                    site for non-personal use without written permission.
                    <br />
                  </>
                )}
              </p>

              <h3>{isHebrew ? "7. זמינות האתר" : "7. Site Availability"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    7.1. החברה עושה מאמצים לשמור על זמינות האתר, אך אינה מתחייבת
                    לכך באופן רציף.
                    <br />
                    7.2. ייתכנו תקלות טכניות, תחזוקה שוטפת או שיבושים שאינם
                    בשליטת החברה.
                    <br />
                  </>
                ) : (
                  <>
                    7.1. The Company strives to maintain the site's availability
                    but cannot guarantee uninterrupted access.
                    <br />
                    7.2. Technical issues, routine maintenance, or disruptions
                    beyond the Company’s control may occur.
                    <br />
                  </>
                )}
              </p>

              <h3>{isHebrew ? "8. שינוי התקנון" : "8. Terms Modification"}</h3>
              <p>
                {isHebrew
                  ? "החברה רשאית לעדכן תקנון זה בכל עת, והגרסה המחייבת היא זו המופיעה באתר בעת הגלישה."
                  : "The Company may update these terms at any time. The binding version is the one published on the site at the time of browsing."}
              </p>

              <h3>{isHebrew ? "9. סמכות שיפוט" : "9. Jurisdiction"}</h3>
              <p>
                {isHebrew ? (
                  <>
                    9.1. על התקנון יחולו דיני מדינת ישראל בלבד.<br></br>
                    9.2. סמכות השיפוט הבלעדית תהיה בבתי המשפט המוסמכים במחוז
                    חיפה.
                  </>
                ) : (
                  <>
                    9.1. These terms are governed solely by the laws of the
                    State of Israel.<br></br> 9.2. Exclusive jurisdiction lies
                    with the competent courts in the Haifa District.
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
