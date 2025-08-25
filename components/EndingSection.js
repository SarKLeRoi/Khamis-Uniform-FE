import { color } from "framer-motion";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();

  const t = {
    he: {
      office: "Khamis Uniform",
      address: "פאולוס השישי 81, נצרת",
      nav: ["ראשי", "אודות", "שירותים", "גלריה", "צור קשר"],
      contact: "צור קשר",
      email: "contact@khamisuniform.com",
      phone: "04-6576068",
      rights: "כל הזכויות שמורות ל-Khamis Uniform  © 2025",
      links: ["תקנון שימוש", "מדיניות פרטיות", "הצהרת נגישות"],
    },
    en: {
      office: "Khamis Uniform",
      address: "Paulus ha-Shishi St 81، Nazareth",
      nav: ["Home", "About", "Services", "Gallery", "Contact"],
      contact: "Contact",
      email: "contact@khamisuniform.com",
      phone: "04-6576068",
      rights: "All rights reserved to Khamis Uniform © 2025",
      links: ["Terms of Use", "Privacy Policy", "Accessibility Statement"],
    },
    ar: {
      office: "خميس يونيفورم",
      address: "شارع بولص السادس 81, الناصرة",
      nav: ["الرئيسية", "من نحن", "الخدمات", "من شغلنا", "تواصلوا معنا"],
      contact: "Contact",
      email: "contact@khamisuniform.com",
      phone: "04-6576068",
      rights: "جميع الحقوق محفوظة لخميس يونيفورم © 2025",
      links: ["الشروط والأحكام", "سياسة الخصوصية", "الإعلانات المتاحة"],
    },
  }[lang];

  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label={
        lang === "he" ? "כותרת תחתונה" : lang === "ar" ? "التذييل" : "Footer"
      }
      dir={lang === "he" || lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="footer-container">
        <div
          className={`footer-top ${
            lang === "he" || lang === "ar" ? "rtl" : "ltr"
          }`}
        >
          <motion.div
            className={`footer-left ${
              lang === "he" || lang === "ar" ? "rtl" : "ltr"
            }`}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <button
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="footer-menu"
              aria-label={
                menuOpen
                  ? lang === "he"
                    ? "סגור תפריט תחתון"
                    : lang === "ar"
                    ? "إغلاق قائمة التذييل"
                    : "Close footer menu"
                  : lang === "he"
                  ? "פתח תפריט תחתון"
                  : lang === "ar"
                  ? "فتح قائمة التذييل"
                  : "Open footer menu"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </motion.div>

          <motion.div
            className={`footer-right ${
              lang === "he" || lang === "ar" ? "rtl" : "ltr"
            }`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <strong>{t.office}</strong>
            <p>{t.address}</p>
          </motion.div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="footer-menu"
              className="footer-menu"
              aria-label={
                lang === "he"
                  ? "ניווט תחתון"
                  : lang === "ar"
                  ? "التنقل في التذييل"
                  : "Footer navigation"
              }
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <hr className="footer-divider" />
              <a href="#">{t.nav[0]}</a>
              <a href="#about">{t.nav[1]}</a>
              <a href="#services">{t.nav[2]}</a>
              <a href="#projects">{t.nav[3]}</a>
              <a href="#contact">{t.nav[4]}</a>
              <br />
              <a
                href="mailto:info@khamisuniform.com"
                className="contact-svg-footer"
                aria-label={
                  lang === "he"
                    ? 'שלח דוא"ל לחמיס יוניפורם'
                    : lang === "ar"
                    ? "أرسل بريد إلكترونי إلى خميس يونيفورم"
                    : "Send email to Khamis Uniform"
                }
              >
                {t.email} <span className="icon-svg email" />
              </a>
              <a
                href="tel:9724657606"
                className="contact-svg-footer"
                aria-label={
                  lang === "he"
                    ? "התקשר לחמיס יוניפורם"
                    : lang === "ar"
                    ? "اتصل بخميس يونيفورم"
                    : "Call Khamis Uniform"
                }
              >
                {t.phone} <span className="icon-svg phone" />
              </a>
              <hr className="footer-divider" />
            </motion.nav>
          )}
        </AnimatePresence>

        <motion.div
          className="footer-icons-row"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a
            href="https://www.facebook.com/untoldposter/"
            className="icon-svg facebook"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/khamisuniform/"
            className="icon-svg instagram"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://wa.me/9724657608"
            className="icon-svg whatsapp"
            aria-label="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </motion.div>

        <hr className="footer-divider" />

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p>{t.rights}</p>
          <div className="footer-links">
            <a href="/termsOfUse">{t.links[0]}</a>
            <a href="/privacyPolicy">{t.links[1]}</a>
            <a href="/accessibilityStatement">{t.links[2]}</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
