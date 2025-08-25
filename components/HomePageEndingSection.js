import { useRouter } from "next/router";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";

export default function FinalSection() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  const content = {
    he: {
      question: "יש לכם",
      question2: "שאלה?",
      button: "דברו איתנו",
      mapTitle: "מיקום חמיס יוניפורם",
      mapLoading: "טוען מפה...",
      mapError: "שגיאה בטעינת המפה",
    },
    ar: {
      question: "عندكم",
      question2: "سؤال؟",
      button: "احكوا معنا",
      mapTitle: "موقع خميس يونيفورم",
      mapLoading: "جاري تحميل الخريطة...",
      mapError: "خطأ في تحميل الخريطة",
    },
    en: {
      question: "Have a",
      question2: "question?",
      button: "Talk to us",
      mapTitle: "Khamis Uniform Location",
      mapLoading: "Loading map...",
      mapError: "Error loading map",
    },
  };

  const t = content[lang] || content.he;

  const handleNavigation = () => {
    window.open("https://wa.me/9724657606", "_blank");
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
    setMapError(false);
  };

  const handleMapError = () => {
    setMapError(true);
    setMapLoaded(false);
  };

  // Google Maps API key and coordinates
  const mapConfig = {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    coordinates: {
      lat: 32.6995606,
      lng: 35.2961315,
      zoom: 15,
    },
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13429.96665860445!2d35.2961315!3d32.6995606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c4d99744fc733%3A0xf1e9db4f7dc10f0!2sKhamis%20UNIFORM!5e0!3m2!1sen!2sil!4v1732303191499!5m2!1sen!2sil",
  };

  return (
    <div>
      <section className="homepage-contactinfo-section">
        <div className="contact-map-wrapper">
          {/* Left Content: Enhanced Google Map */}
          <div className="map-container">
            <div className="map-header">
              <h3 className="map-title">{t.mapTitle}</h3>
            </div>

            {/* Loading State */}
            {!mapLoaded && !mapError && (
              <div className="map-loading">
                <div className="loading-spinner"></div>
                <p>{t.mapLoading}</p>
              </div>
            )}

            {/* Error State */}
            {mapError && (
              <div className="map-error">
                <p>{t.mapError}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="retry-button"
                  aria-label={t.mapLoading}
                >
                  {lang === "he"
                    ? "נסה שוב"
                    : lang === "ar"
                    ? "حاول مرة أخرى"
                    : "Try Again"}
                </button>
              </div>
            )}

            {/* Google Maps Embed */}
            <iframe
              src={mapConfig.embedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: mapLoaded ? "block" : "none",
              }}
              allowFullScreen=""
              loading="lazy"
              title={t.mapTitle}
              aria-label={t.mapTitle}
              onLoad={handleMapLoad}
              onError={handleMapError}
              className="google-map-iframe"
            ></iframe>

            {/* Interactive Map Link */}
            <div className="map-actions">
              <a
                href={`https://www.google.com/maps?q=${mapConfig.coordinates.lat},${mapConfig.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link-button"
                aria-label={
                  lang === "he"
                    ? "פתח במפות גוגל"
                    : lang === "ar"
                    ? "افتح في خرائط جوجل"
                    : "Open in Google Maps"
                }
              >
                {lang === "he"
                  ? "פתח במפות"
                  : lang === "ar"
                  ? "افتح في الخرائط"
                  : "Open in Maps"}
              </a>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="divider-line"></div>

          {/* Right Content: Contact Section */}
          <div
            className={`contact-container ${
              lang === "he" || lang === "ar" ? "rtl" : "ltr"
            }`}
          >
            <p>
              <span className="bold-text">{t.question}</span>
              <span className="bold-text"> {t.question2}</span>
            </p>
            <button onClick={handleNavigation} className="contact-button">
              {t.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
