import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function YSAArchitecturalAnimation() {
  const { lang } = useLanguage();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 2000),
      setTimeout(() => setStage(2), 3000),
    ];
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const text = {
    he: {
      title: "חמיס",
      subtitle: "יוניפורם",
      paragraph:
        "עם ניסיון של מעל ל-25 שנה ומוניטין מוכח בישראל, חמיס יוניפורם מספקת שירותי יוניפורם מקצועיים ואיכותיים לכל סוגי העסקים והמוסדות. הצוות שלנו מונה מומחים מנוסים בתחום הלבוש המקצועי, הפועלים בשטח ומספקים פתרונות מותאמים אישית: מתכנון ועיצוב, דרך ייצור איכותי, ועד לשירות לקוחות מעולה והתאמה לצרכים הספציפיים של כל לקוח.",
    },
    en: {
      title: "Khamis",
      subtitle: "Uniform",
      paragraph:
        "With over 25 years of experience and a proven reputation in Israel, Khamis Uniform provides professional and quality uniform services for all types of businesses and institutions. Our team includes experienced specialists in professional clothing, working on-site and providing customized solutions: from design and planning, through quality manufacturing, to excellent customer service and adaptation to the specific needs of each client.",
    },
  };

  const t = text[lang];

  const letterVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    initial: { opacity: 1 },
    zoomToS: {
      scale: [1, 1.1],
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    slideToSide: {
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section
      className={`ysa-container ${
        lang === "he" || lang === "ar" ? "rtl" : "ltr"
      }`}
      aria-label={
        lang === "he"
          ? "אנימציית פתיחה של חמיס יוניפורם"
          : lang === "ar"
          ? "رسوم متحركة افتتاحية لـ خميس يونيفورم"
          : "Khamis Uniform Intro Animation"
      }
    >
      <motion.div
        className="ysa-inner"
        variants={containerVariants}
        initial="initial"
        animate={
          stage === 0 ? "initial" : stage === 1 ? "zoomToS" : "slideToSide"
        }
      >
        <AnimatePresence>
          {(stage === 0 || stage === 1) && (
            <motion.div
              className="ysa-logo-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              role="presentation"
              aria-hidden="true"
            >
              <div className="ysa-logo-wrapper">
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "20rem" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="ysa-corner-line-horizontal"
                  aria-hidden="true"
                />
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "6rem" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="ysa-corner-line-vertical"
                  aria-hidden="true"
                />

                <motion.div
                  className="ysa-letters"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  aria-label={t.title}
                  role="heading"
                  aria-level={1}
                >
                  {(lang === "he" ? [...t.title].reverse() : [...t.title]).map(
                    (char, i) => (
                      <motion.div
                        key={i}
                        className="ysa-letter"
                        style={{ color: "#000000" }}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                          duration: 0.7,
                          delay:
                            0.2 +
                            (lang === "he"
                              ? ([...t.title].length - 1 - i) * 0.2
                              : i * 0.2),
                        }}
                        aria-hidden="true"
                      >
                        {char}
                      </motion.div>
                    )
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="ysa-light-spot"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage === 2 && (
            <motion.div
              className="ysa-stage2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              aria-live="polite"
            >
              <div className="ysa-content-wrapper">
                <motion.div
                  className="ysa-image-container relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  role="img"
                  aria-label={
                    lang === "he"
                      ? "תמונה עם רקע ארכיטקטוני"
                      : "Architectural background image"
                  }
                >
                  <div className="ysa-curved-image relative w-full h-[500px] overflow-hidden">
                    <Image
                      src="/images/background.webp"
                      alt={lang === "he" ? "רקע" : "Background"}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="ysa-corner-line-horizontal translate-y-[-1rem]"
                    aria-hidden="true"
                  />
                  <div
                    className="ysa-corner-line-vertical translate-y-[-1rem]"
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.div
                  className="ysa-text-container"
                  variants={textContentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h1 className={`ysa-title ${lang === "he" ? "rtl" : "ltr"}`}>
                    <span>{t.title}</span>
                    <span>{t.subtitle}</span>
                  </h1>
                  <p
                    className={`ysa-paragraph ${lang === "he" ? "rtl" : "ltr"}`}
                  >
                    {t.paragraph}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
