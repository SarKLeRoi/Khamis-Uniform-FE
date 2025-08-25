import { useRouter } from "next/router";
import { useLanguage } from "../context/LanguageContext";

export default function FinalSection() {
  const router = useRouter();
  const { lang } = useLanguage();

  const content = {
    he: {
      question: "יש לכם",
      question2: "שאלה?",
      button: "דברו איתנו",
    },
    ar: {
      question: "عندكم",
      question2: "سؤال؟",
      button: "احكوا معنا",
    },
    en: {
      question: "Have a",
      question2: "question?",
      button: "Talk to us",
    },
  };

  const t = content[lang] || content.he;

  const handleNavigation = () => {
    window.open("https://wa.me/97246576068", "_blank");
  };

  return (
    <div>
      <section className="homepage-contactinfo-section">
        <div className="contact-map-wrapper">
          {/* Left Content: Google Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13429.96665860445!2d35.2961315!3d32.6995606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c4d99744fc733%3A0xf1e9db4f7dc10f0!2sKhamis%20UNIFORM!5e0!3m2!1sen!2sil!4v1732303191499!5m2!1sen!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
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
