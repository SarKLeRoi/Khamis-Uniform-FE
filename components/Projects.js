import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);
  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const projectData = {
    he: {
      title: "פרויקטים נבחרים",
      placeholder: "תמונה להמחשה בלבד",
      projects: [
        {
          id: 1,
          name: "בית חולים רמב״ם - מדים רפואיים",
          subtitle: "חיפה • 2024",
          description:
            "אספקת מדים רפואיים מותאמים אישית לכל מחלקות בית החולים, כולל רקמה של לוגו בית החולים והדפסת שמות הצוות על המדים.",
          imageUrl: "/images/projects/project1.webp",
        },
        {
          id: 2,
          name: "מסעדת בייט - בגדי עבודה למטבח",
          subtitle: "חיפה • 2023",
          description:
            "עיצוב וייצור בגדי עבודה מקצועיים לצוות המטבח, כולל חולצות עם רקמה של שם המסעדה וסינרים מותאמים אישית.",
          imageUrl: "/images/projects/project2.webp",
        },
        {
          id: 3,
          name: "מפעל בז״ן - בגדי עבודה תעשייתיים",
          subtitle: "חיפה • 2022",
          description:
            "אספקת בגדי עבודה בטיחותיים לעובדי המפעל, כולל חליפות עבודה עם רקמה של לוגו החברה וציוד בטיחות מותאם.",
          imageUrl: "/images/projects/project3.webp",
        },
        {
          id: 4,
          name: "בית ספר תיכון - מדים לתלמידים",
          subtitle: "חיפה • 2023",
          description:
            "עיצוב וייצור מדים אחידים לתלמידי בית הספר, כולל חולצות עם רקמה של סמל בית הספר וצבעים מותאמים.",
          imageUrl: "/images/projects/project4.webp",
        },
        {
          id: 5,
          name: "מרכז קניות - בגדי עבודה לצוות",
          subtitle: "חיפה • 2022",
          description:
            "אספקת בגדי עבודה מקצועיים לצוות המרכז, כולל חולצות עם רקמה של לוגו המרכז וצבעים מותאמים לזהות המותג.",
          imageUrl: "/images/projects/project5.webp",
        },
        {
          id: 6,
          name: "מסעדת צ׳יקרס - מדים למטבח",
          subtitle: "חיפה • 2019",
          description:
            "עיצוב וייצור מדים מקצועיים לצוות המטבח, כולל חולצות עם רקמה של שם המסעדה וסינרים מותאמים אישית.",
          imageUrl: "/images/projects/project6.webp",
        },
      ],
    },
    en: {
      title: "Featured Projects",
      placeholder: "Illustrative image only",
      projects: [
        {
          id: 1,
          name: "Rambam Hospital - Medical Uniforms",
          subtitle: "Haifa • 2024",
          description:
            "Supply of custom medical uniforms for all hospital departments, including embroidery of hospital logo and printing of staff names on uniforms.",
          imageUrl: "/images/projects/project1.webp",
        },
        {
          id: 2,
          name: "Bayat Restaurant - Kitchen Workwear",
          subtitle: "Haifa • 2023",
          description:
            "Design and production of professional workwear for kitchen staff, including shirts with restaurant name embroidery and custom aprons.",
          imageUrl: "/images/projects/project2.webp",
        },
        {
          id: 3,
          name: "Bazan Factory - Industrial Workwear",
          subtitle: "Haifa • 2022",
          description:
            "Supply of safety workwear for factory workers, including work suits with company logo embroidery and custom safety equipment.",
          imageUrl: "/images/projects/project3.webp",
        },
        {
          id: 4,
          name: "High School - Student Uniforms",
          subtitle: "Haifa • 2023",
          description:
            "Design and production of uniform uniforms for school students, including shirts with school emblem embroidery and custom colors.",
          imageUrl: "/images/projects/project4.webp",
        },
        {
          id: 5,
          name: "Shopping Center - Staff Workwear",
          subtitle: "Haifa • 2022",
          description:
            "Supply of professional workwear for center staff, including shirts with center logo embroidery and colors adapted to brand identity.",
          imageUrl: "/images/projects/project5.webp",
        },
        {
          id: 6,
          name: "Chickers Restaurant - Kitchen Uniforms",
          subtitle: "Haifa • 2019",
          description:
            "Design and production of professional uniforms for kitchen staff, including shirts with restaurant name embroidery and custom aprons.",
          imageUrl: "/images/projects/project6.webp",
        },
      ],
    },
    ar: {
      title: "مشاريع مختارة",
      placeholder: "صورة توضيحية فقط",
      projects: [
        {
          id: 1,
          name: "مستشفى رامبام - زي طبي موحد",
          subtitle: "حيفا • 2024",
          description:
            "توريد زي طبي موحد مخصص لجميع أقسام المستشفى، بما في ذلك تطريز شعار المستشفى وطباعة أسماء الموظفين على الزي.",
          imageUrl: "/images/projects/project1.webp",
        },
        {
          id: 2,
          name: "مطعم بيات - ملابس عمل للمطبخ",
          subtitle: "حيفا • 2023",
          description:
            "تصميم وإنتاج ملابس عمل احترافية لطاقم المطبخ، بما في ذلك قمصان مع تطريز اسم المطعم ومريولات مخصصة.",
          imageUrl: "/images/projects/project2.webp",
        },
        {
          id: 3,
          name: "مصنع بازان - ملابس عمل صناعية",
          subtitle: "حيفا • 2022",
          description:
            "توريد ملابس عمل آمنة لعمال المصنع، بما في ذلك بدلات عمل مع تطريز شعار الشركة ومعدات أمان مخصصة.",
          imageUrl: "/images/projects/project3.webp",
        },
        {
          id: 4,
          name: "مدرسة ثانوية - زي موحد للطلاب",
          subtitle: "حيفا • 2023",
          description:
            "تصميم وإنتاج زي موحد للطلاب، بما في ذلك قمصان مع تطريز شعار المدرسة وألوان مخصصة.",
          imageUrl: "/images/projects/project4.webp",
        },
        {
          id: 5,
          name: "مركز تسوق - ملابس عمل للموظفين",
          subtitle: "حيفا • 2022",
          description:
            "توريد ملابس عمل احترافية لموظفي المركز، بما في ذلك قمصان مع تطريز شعار المركز وألوان متكيفة مع هوية العلامة التجارية.",
          imageUrl: "/images/projects/project5.webp",
        },
        {
          id: 6,
          name: "مطعم تشيكرز - زي موحد للمطبخ",
          subtitle: "حيفا • 2019",
          description:
            "تصميم وإنتاج زي موحد احترافي لطاقم المطبخ، بما في ذلك قمصان مع تطريز اسم المطعم ومريولات مخصصة.",
          imageUrl: "/images/projects/project6.webp",
        },
      ],
    },
  };

  const t = projectData[lang];
  const projects = t.projects;

  const scrollLeft = () => {
    if (carouselRef.current && !isScrolling) {
      setIsScrolling(true);
      const card = carouselRef.current.querySelector(".project-card");
      const cardWidth = card
        ? card.offsetWidth + parseInt(getComputedStyle(card).marginRight || 0)
        : 320;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && !isScrolling) {
      setIsScrolling(true);
      const card = carouselRef.current.querySelector(".project-card");
      const cardWidth = card
        ? card.offsetWidth + parseInt(getComputedStyle(card).marginRight || 0)
        : 320;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  const openProjectModal = (projectId) => {
    setActiveProject(projectId);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="projects-container">
        <div className="projects-header">
          <h2>{t.title}</h2>
        </div>
        <div className="projects-row">
          <button className="scroll-arrow right" onClick={scrollRight}>
            &#8594;
          </button>
          <div className="projects-carousel" ref={carouselRef}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                role="button"
                tabIndex={0}
                onClick={() => openProjectModal(project.id)}
                onKeyDown={(e) =>
                  e.key === "Enter" && openProjectModal(project.id)
                }
                aria-label={`${project.name}, ${project.subtitle}`}
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <div
                  className={`project-overlay ${
                    lang === "he" || lang === "ar" ? "rtl" : "ltr"
                  }`}
                >
                  <h3>{project.name}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <div className="project-tag">{t.placeholder}</div>
              </div>
            ))}
          </div>
          <button className="scroll-arrow left" onClick={scrollLeft}>
            &#8592;
          </button>
        </div>

        {activeProject && (
          <div className="modal-backdrop" onClick={closeProjectModal}>
            <div
              className="modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${activeProject}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-image"
                style={{
                  backgroundImage: `url(${
                    projects.find((p) => p.id === activeProject).imageUrl
                  })`,
                }}
              >
                <button className="close-button" onClick={closeProjectModal}>
                  &times;
                </button>
                <div
                  className={`modal-header-text ${
                    lang === "he" || lang === "ar" ? "rtl" : "ltr"
                  }`}
                >
                  <h3 id={`modal-title-${activeProject}`}>
                    {projects.find((p) => p.id === activeProject).name}
                  </h3>
                  <p>{projects.find((p) => p.id === activeProject).subtitle}</p>
                </div>
              </div>
              <div
                className={`modal-description ${
                  lang === "he" || lang === "ar" ? "rtl" : "ltr"
                }`}
              >
                <p>
                  {projects.find((p) => p.id === activeProject).description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
