import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "../context/LanguageContext";

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
}));

export default function GalleryGrid() {
  const { lang } = useLanguage();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryContent = {
    he: {
      title: "עבודה שלנו",
      subtitle: "אוסף תמונות מהעבודה שלנו",
      viewAll: "+ הצג הכל",
    },
    ar: {
      title: "شغلنا",
      subtitle: "",
      viewAll: "+ عرض الكل",
    },
    en: {
      title: "Our Work",
      subtitle: "",
      viewAll: "+ View All",
    },
  };

  const t = galleryContent[lang] || galleryContent.en;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <div
      className={`gallery-container ${
        lang === "he" || lang === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="gallery-header">
        <h1 className="gallery-title">{t.title}</h1>
        <p className="gallery-subtitle">{t.subtitle}</p>
      </div>

      <div className="gallery-grid">
        <div className="masonry-columns">
          {galleryImages.slice(0, 11).map((image, index) => (
            <div
              key={index}
              className="masonry-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}

          {/* View All Card */}
          <div
            className="masonry-item simple-view-all-box"
            onClick={() => openLightbox(0)}
          >
            {t.viewAll}
          </div>
        </div>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={closeLightbox}
        index={currentImageIndex}
        slides={galleryImages}
      />
    </div>
  );
}
