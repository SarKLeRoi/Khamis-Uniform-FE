import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesShowcase() {
  const { lang } = useLanguage();

  const services = {
    he: {
      title: "השירותים שלנו",
      subtitle:
        "אנו מציעים פתרונות בהתאמה אישית לבגדי עבודה, רקמה, הדפסה ומוצרי פרסום – הכל במקום אחד.",
      items: {
        "בגדי עבודה ומדים":
          "אספקת בגדי עבודה ומדים לתעשייה, רפואה, חינוך ועוד – במבחר דגמים וגדלים.",
        "שירות רקמה והדפסה":
          "רקמה והדפסה מקצועית של לוגו על בגדים לפי דרישות הלקוח.",
        "תפירה והתאמות מיוחדות":
          "שירות תפירה בהתאמה אישית כולל מידות מיוחדות, עיצובים וגזרות מותאמות.",
        "מוצרי פרסום ממותגים":
          "מגוון מוצרים ממותגים עם לוגו החברה – מתנות ללקוחות, עובדים ואירועים.",
        "ייעוץ מקצועי": "עזרה בבחירת בגדים, חיסכון ופתרונות מותאמים לעסק שלך.",
        "שירות מהיר ואישי":
          "ליווי אישי, עמידה בזמנים ושירות אמין – מעסקים קטנים ועד מוסדות גדולים.",
      },
    },
    en: {
      title: "Our Services",
      subtitle:
        "We offer personalized solutions for workwear, embroidery, printing, and branded merchandise – all in one place.",
      items: {
        "Workwear & Uniforms":
          "Supplying uniforms for industrial, medical, and educational sectors – wide range of models and sizes.",
        "Embroidery & Printing":
          "Professional embroidery and printing of your company logo on garments.",
        "Tailoring & Custom Fit":
          "Custom tailoring services, including special sizes, cuts, and designs.",
        "Branded Merchandise":
          "Branded gifts and promo items for clients, employees, and events.",
        "Professional Consulting":
          "Helping you choose the right clothing and save money with tailored advice.",
        "Fast & Personal Service":
          "Reliable, personalized service for small businesses and large institutions alike.",
      },
    },
    ar: {
      title: "خدماتنا",
      subtitle:
        "نقدم حلولاً مخصصة لملابس العمل والتطريز والطباعة والمنتجات المطبوعة – كل شيء في مكان واحد.",
      items: {
        "ملابس عمل وزي موحد":
          "توريد زي موحد للقطاعات الصناعية والطبية والتعليمية – مجموعة واسعة من النماذج والمقاسات.",
        "خدمة التطريز والطباعة":
          "تطريز وطباعة احترافية للوجو على الملابس حسب متطلبات العميل.",
        "خياطة وتعديلات خاصة":
          "خدمة خياطة مخصصة تشمل مقاسات خاصة وتصاميم وقصات مخصصة.",
        "منتجات دعائية مطبوعة":
          "مجموعة متنوعة من المنتجات المطبوعة مع شعار الشركة – هدايا للعملاء والموظفين والفعاليات.",
        "استشارة مهنية": "مساعدة في اختيار الملابس والتوفير وحلول مخصصة لعملك.",
        "خدمة سريعة وشخصية":
          "مرافقة شخصية والالتزام بالمواعيد وخدمة موثوقة – من الأعمال الصغيرة إلى المؤسسات الكبيرة.",
      },
    },
  };

  const t = services[lang];
  const serviceKeys = Object.keys(t.items);
  const [selectedService, setSelectedService] = useState(serviceKeys[0]);

  useEffect(() => {
    if (!serviceKeys.includes(selectedService)) {
      setSelectedService(serviceKeys[0]);
    }
  }, [lang]);

  const icons = [
    <ShirtIcon />,
    <EmbroideryIcon />,
    <TailorIcon />,
    <GiftIcon />,
    <ConsultingIcon />,
    <FastServiceIcon />,
  ];

  const colors = [
    { bgColor: "#eff6ff", color: "#2563eb" },
    { bgColor: "#dcfce7", color: "#15803d" },
    { bgColor: "#fee2e2", color: "#b91c1c" },
    { bgColor: "#ede9fe", color: "#7c3aed" },
    { bgColor: "#fef3c7", color: "#b45309" },
    { bgColor: "#cffafe", color: "#06b6d4" },
  ];

  const serviceStyles = serviceKeys.reduce((acc, key, idx) => {
    acc[key] = {
      ...colors[idx % colors.length],
      icon: icons[idx % icons.length],
    };
    return acc;
  }, {});

  const selectedStyle = serviceStyles[selectedService] || {
    bgColor: "#fff",
    color: "#000",
    icon: <SupervisionIcon />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const featuredCardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <motion.div
      className="services-section"
      role="region"
      aria-label={
        lang === "he"
          ? "השירותים שלנו"
          : lang === "ar"
          ? "خدماتنا"
          : "Our Services"
      }
      lang={lang}
      dir={lang === "he" || lang === "ar" ? "rtl" : "ltr"}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="services-container">
        <div className="services-content-wrapper">
          <motion.div className="header" variants={headerVariants}>
            <h2 className="services-main-title">{t.title}</h2>
            <p className="subtitle">{t.subtitle}</p>
          </motion.div>

          <div className="services-section">
            <div
              className="service-card featured"
              aria-current="true"
              tabIndex={-1}
            >
              <div
                className="service-icon-wrapper"
                style={{
                  backgroundColor: selectedStyle.bgColor,
                  color: selectedStyle.color,
                }}
              >
                {React.cloneElement(selectedStyle.icon, {
                  "aria-hidden": "true",
                })}
              </div>
              <h3 className="service-title">{selectedService}</h3>
              <p className="service-description">{t.items[selectedService]}</p>
            </div>

            <motion.div
              className="services-grid"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              role="list"
            >
              {serviceKeys.map((service, index) => (
                <motion.div
                  key={service}
                  className="service-card"
                  onClick={() => setSelectedService(service)}
                  variants={gridItemVariants}
                  whileHover="hover"
                  custom={index}
                  tabIndex={0}
                  role="listitem"
                  aria-selected={selectedService === service}
                  aria-label={service}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedService(service);
                    }
                  }}
                >
                  <div
                    className="service-icon-wrapper"
                    style={{
                      backgroundColor: serviceStyles[service].bgColor,
                      color: serviceStyles[service].color,
                    }}
                  >
                    {React.cloneElement(serviceStyles[service].icon, {
                      "aria-hidden": "true",
                    })}
                  </div>
                  <h3
                    className={`service-card-title ${
                      lang === "he" || lang === "ar" ? "rtl" : "ltr"
                    }`}
                  >
                    {service}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
function ShirtIcon(props) {
  return (
    <svg
      {...props}
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M4 4l4 2v14H4V4zM20 4l-4 2v14h4V4zM8 2h8v4H8V2z" />
    </svg>
  );
}

function EmbroideryIcon(props) {
  return (
    <svg
      {...props}
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M12 2v20M4 12h16" />
    </svg>
  );
}

function TailorIcon(props) {
  return (
    <svg
      {...props}
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M4 20c1-4 6-6 8-6s7 2 8 6" />
    </svg>
  );
}

function GiftIcon(props) {
  return (
    <svg
      {...props}
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M20 12v8H4v-8m16 0H4m16 0V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
    </svg>
  );
}

function ConsultingIcon(props) {
  return (
    <svg
      {...props}
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M12 20v-6M6 20v-4M18 20v-4M6 8h12M6 12h12" />
    </svg>
  );
}

function FastServiceIcon(props) {
  return (
    <svg
      {...props}
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M4 4h16v16H4zM12 8v8M8 12h8" />
    </svg>
  );
}
