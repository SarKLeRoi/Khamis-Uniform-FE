/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const languageDropdownRef = useRef(null);

  const handleClick = () => setClick(!click);

  const handleSubMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", click);
  }, [click]);

  // Handle clicking outside language dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "he", name: "עברית" },
    { code: "ar", name: "العربية" },
    { code: "en", name: "English" },
  ];

  const currentLanguage = languages.find((l) => l.code === lang);

  const handleLanguageChange = (newLang) => {
    if (newLang !== lang) {
      // Use the existing toggle logic but cycle to the target language
      let currentIndex = languages.findIndex((l) => l.code === lang);
      let targetIndex = languages.findIndex((l) => l.code === newLang);

      // Calculate how many toggles needed to reach target
      let togglesNeeded = (targetIndex - currentIndex + 3) % 3;

      // Apply the toggles
      for (let i = 0; i < togglesNeeded; i++) {
        toggleLanguage();
      }
    }
    setIsLanguageOpen(false);
  };

  const navLabels = {
    he: {
      home: "ראשי",
      about: "אודות",
      services: "שירותים",
      projects: "גלרייה",
      contact: "צור קשר",
      phone: "052-558-3898",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "معرض الصور",
      contact: "اتصل بنا",
      phone: "052-558-3898",
    },
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Gallery",
      contact: "Contact",
      phone: "+97252-558-3898",
    },
  };

  const t = navLabels[lang];

  return (
    <div className={`navbar ${lang === "he" || lang === "ar" ? "rtl" : "ltr"}`}>
      {" "}
      {/* Add language class for direction */}
      <div
        className={`mobile-navbar ${
          lang === "he" || lang === "ar" ? "rtl" : "ltr"
        }`}
      >
        <Logo />
        <div
          className={`mobile-menu-icon`}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClick();
          }}
          role="button"
          tabIndex={0}
          aria-label={click ? "Close menu" : "Open menu"}
          aria-expanded={click}
          aria-controls="mobile-menu"
        >
          {click ? (
            <div className="close-icon" aria-hidden="true">
              &#10005;
            </div>
          ) : (
            <div className="menu-icon" aria-hidden="true">
              <div className="hamburger-icon">&#9776;</div>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {click && (
          <motion.div
            id="mobile-menu"
            className={`mobile-menu ${click ? "open" : ""} ${lang}`}
            role="navigation"
            aria-label={
              lang === "he"
                ? "תפריט ניווט ראשי"
                : lang === "ar"
                ? "القائمة الرئيسية"
                : "Main navigation"
            }
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul className={lang === "he" || lang === "ar" ? "rtl" : "ltr"}>
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
              <li>
                <Link legacyBehavior href="#about">
                  <a
                    className="navbar-mobile-items"
                    onClick={() => setClick(false)}
                  >
                    {t.about}
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#services">
                  <a
                    className="navbar-mobile-items"
                    onClick={() => setClick(false)}
                  >
                    {t.services}
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#gallery">
                  <a
                    className="navbar-mobile-items"
                    onClick={() => setClick(false)}
                  >
                    {t.projects}
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#contact">
                  <a
                    className="navbar-mobile-items"
                    onClick={() => setClick(false)}
                  >
                    {t.contact}
                  </a>
                </Link>
              </li>
            </ul>

            <div className="additional-logos">
              <div className="contact-link">
                <a
                  href="/contact"
                  className={`contact-link ${
                    lang === "he" || lang === "ar" ? "rtl" : "ltr"
                  }`}
                >
                  {t.phone}
                </a>
              </div>
              <div className="footer-icons-row">
                <a
                  href="#"
                  className="icon-svg linkedin"
                  aria-label="LinkedIn"
                ></a>
                <a
                  href="#"
                  className="icon-svg instagram"
                  aria-label="Instagram"
                ></a>
                <a
                  href="#"
                  className="icon-svg facebook"
                  aria-label="Facebook"
                ></a>
              </div>
              <div className="language-toggle-container">
                <div className="language-dropdown" ref={languageDropdownRef}>
                  <button
                    className="language-dropdown-button"
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    aria-label="Select language"
                    aria-expanded={isLanguageOpen}
                  >
                    <Globe size={16} className="globe-icon" />
                    <span className="current-language">
                      {currentLanguage.name}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`chevron ${isLanguageOpen ? "open" : ""}`}
                    />
                  </button>

                  {isLanguageOpen && (
                    <div className="language-dropdown-menu">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          className={`language-option ${
                            language.code === lang ? "active" : ""
                          }`}
                          onClick={() => handleLanguageChange(language.code)}
                          aria-label={`Select ${language.name}`}
                        >
                          <span className="language-name">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ul
        className={`desktop-menu ${click ? "hidden" : ""} ${
          lang === "he" || lang === "ar" ? "rtl" : "ltr"
        }`}
        role="navigation"
        aria-label={
          lang === "he"
            ? "ניווט ראשי"
            : lang === "ar"
            ? "الملاحة الرئيسية"
            : "Main navigation"
        }
        style={{
          justifyContent: lang === "he" || lang === "ar" ? "center" : "center",
        }}
      >
        {/* <Logo isSticky={isSticky} /> */}
        <li>
          <Link className="main-title" href="#">
            {t.home}
          </Link>
        </li>
        <li>
          <Link className="main-title" href="#about">
            {t.about}
          </Link>
        </li>
        <li>
          <Link className="main-title" href="#services">
            {t.services}
          </Link>
        </li>
        <li>
          <Link className="main-title" href="#gallery">
            {t.projects}
          </Link>
        </li>
        <li>
          <Link className="main-title" href="#contact">
            {t.contact}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
