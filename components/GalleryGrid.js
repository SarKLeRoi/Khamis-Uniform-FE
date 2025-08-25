import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "../context/LanguageContext";

// Create array with all 50 gallery images
const galleryImages = Array.from({ length: 50 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  alt: `Gallery image ${i + 1}`,
}));

export default function GalleryGrid() {
  const { lang } = useLanguage();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [accessibleImages, setAccessibleImages] = useState([]);

  const galleryContent = {
    he: {
      title: "עבודה שלנו",
      subtitle: "אוסף תמונות מהעבודה שלנו",
      viewAll: "+ הצג הכל",
      loading: "טוען...",
    },
    ar: {
      title: "شغلنا",
      subtitle: "",
      viewAll: "+ عرض الكل",
      loading: "جاري التحميل...",
    },
    en: {
      title: "Our Work",
      subtitle: "",
      viewAll: "+ View All",
      loading: "Loading...",
    },
  };

  const t = galleryContent[lang] || galleryContent.en;

  // Test image accessibility and preload images
  useEffect(() => {
    const testAndPreloadImages = async () => {
      try {
        const imagePromises = galleryImages.map((image, index) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              console.log(
                `Image ${index + 1} loaded successfully: ${image.src}`
              );
              resolve({ ...image, index });
            };
            img.onerror = () => {
              console.error(`Image ${index + 1} failed to load: ${image.src}`);
              reject({ ...image, index });
            };
            img.src = image.src;
          });
        });

        const results = await Promise.allSettled(imagePromises);
        const successful = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);

        console.log(
          `Successfully loaded ${successful.length} out of ${galleryImages.length} images`
        );
        setAccessibleImages(successful);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error in image testing:", error);
        setAccessibleImages(galleryImages);
        setImagesLoaded(true);
      }
    };

    testAndPreloadImages();
  }, []);

  const openLightbox = (index) => {
    console.log(
      `Opening lightbox at index ${index} with ${accessibleImages.length} accessible images`
    );
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  // Show first 12 accessible images in the grid, then the "View All" button
  const displayedImages = accessibleImages.slice(0, 12);

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

      {!imagesLoaded && (
        <div className="gallery-loading">
          <p>{t.loading}</p>
        </div>
      )}

      <div className="gallery-grid">
        <div className="masonry-columns">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="masonry-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              {/* Show "View All" overlay on the last image */}
              {index === displayedImages.length - 1 && (
                <div
                  className="view-all-overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(0);
                  }}
                >
                  <div className="view-all-content">
                    <span className="view-all-text">{t.viewAll}</span>
                    <div className="view-all-subtitle">
                      {accessibleImages.length}{" "}
                      {lang === "he"
                        ? "תמונות"
                        : lang === "ar"
                        ? "صور"
                        : "images"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={closeLightbox}
        index={currentImageIndex}
        slides={accessibleImages}
        carousel={{
          finite: false,
          preload: 5,
        }}
        animation={{
          fade: 300,
          swipe: 500,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        on={{
          view: (index) =>
            console.log(
              `Viewing image ${index + 1} of ${accessibleImages.length}`
            ),
        }}
      />
    </div>
  );
}
