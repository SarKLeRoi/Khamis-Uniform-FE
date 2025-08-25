import React from "react";
import Line from "./Line";
import { useLanguage } from "../context/LanguageContext";
// Reusable ImageContainer component for individual image blocks
const ImageContainer = ({
  src,
  alt,
  title,
  subtitle,
  description,
  isOverlay,
}) => (
  <div
    className={`homepage-image-container ${
      isOverlay ? "big-picture" : "small-picture"
    }`}
  >
    <img src={src} alt={alt} />
    {isOverlay ? (
      <div className="homepage-image-text-overlay">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    ) : (
      <>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h3>{subtitle}</h3>
      </>
    )}
  </div>
);

// Main WorkWearPhotoSection component
const WorkWearPhotoSection = () => {
  const { lang } = useLanguage();

  const workWearContent = {
    he: {
      row1: {
        title: "מחייך בכל",
        title2: "הכנה",
        subtitle: "לכל הדגמים",
      },
      row2: {
        doctors: {
          title: "רופאים במדים מותאמים לכל מחלקה",
          description: "חלוקים רפואיים איכותיים מחכים לכם כאן",
          subtitle: "לכל הדגמים",
        },
        construction: {
          title: "בטיחות ואיכות במדי עבודה",
          description: "בגדי עבודה בטיחותיים ואיכותיים מחכים לכם כאן",
          subtitle: "לכל הדגמים",
        },
      },
    },
    ar: {
      row1: {
        title: "ابتسامة في كل",
        title2: "إعداد",
        subtitle: "لجميع النماذج",
      },
      row2: {
        doctors: {
          title: "أطباء بزي موحد مخصص لكل قسم",
          description: "أردية طبية عالية الجودة تنتظركم هنا",
          subtitle: "لجميع النماذج",
        },
        construction: {
          title: "الأمان والجودة في ملابس العمل",
          description: "ملابس عمل آمنة وعالية الجودة تنتظركم هنا",
          subtitle: "لجميع النماذج",
        },
      },
    },
    en: {
      row1: {
        title: "Smile in every",
        title2: "preparation",
        subtitle: "For all models",
      },
      row2: {
        doctors: {
          title: "Doctors in uniforms adapted for each department",
          description: "Quality medical gowns are waiting for you here",
          subtitle: "For all models",
        },
        construction: {
          title: "Safety and quality in workwear",
          description: "Safe and quality workwear is waiting for you here",
          subtitle: "For all models",
        },
      },
    },
  };

  const t = workWearContent[lang] || workWearContent.he;

  return (
    <div className="homepage-image-grid">
      {/* Row 1 - Single Image with Text Overlay */}
      <div className="homepage-image-row">
        <ImageContainer
          src="images/chef1.webp"
          alt="Chefs cooking"
          title={
            <>
              <span>{t.row1.title}</span>
              <br />
              <span>{t.row1.title2}</span>
            </>
          }
          subtitle={t.row1.subtitle}
          isOverlay={true}
        />
        <Line />
      </div>

      {/* Row 2 - Two Images Side by Side */}
      <div className="homepage-image-row">
        <ImageContainer
          src="images/doctors.webp"
          alt="Doctors"
          title={t.row2.doctors.title}
          description={t.row2.doctors.description}
          subtitle={t.row2.doctors.subtitle}
          isOverlay={false}
        />
        <ImageContainer
          src="images/construction.webp"
          alt="Construction"
          title={t.row2.construction.title}
          description={t.row2.construction.description}
          subtitle={t.row2.construction.subtitle}
          isOverlay={false}
        />
      </div>
    </div>
  );
};

export default WorkWearPhotoSection;
