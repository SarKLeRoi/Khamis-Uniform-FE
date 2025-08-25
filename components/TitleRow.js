/* eslint-disable @next/next/no-html-link-for-pages */
import Logo from "@/components/Logo";
import { useLanguage } from "../context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function TitleRow() {
  const { lang, toggleLanguage } = useLanguage();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Ensure we have a valid language, default to 'he' if undefined
  const currentLang = lang || "he";

  const languages = [
    { code: "he", name: "עברית" },
    { code: "ar", name: "العربية" },
    { code: "en", name: "English" },
  ];

  const currentLanguage = languages.find((l) => l.code === currentLang);

  const handleLanguageChange = (newLang) => {
    if (newLang !== currentLang) {
      try {
        // Directly navigate to the target language using simple navigation
        const basePath = window.location.pathname.replace(/^\/(en|he|ar)/, "");

        if (newLang === "he") {
          // Go to root path with no locale prefix
          const targetPath = basePath === "" ? "/" : basePath;
          window.location.href = targetPath;
        } else {
          // Add locale prefix
          const targetPath = `/${newLang}${
            basePath.startsWith("/") ? basePath : "/" + basePath
          }`;
          window.location.href = targetPath;
        }
      } catch (error) {
        console.error("Language change error:", error);
        // Fallback to simple page reload
        window.location.reload();
      }
    }
    setIsOpen(false);
  };

  // Handle clicking outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="title-row">
      <div className="social-buttons">
        {/* Add your social media buttons here */}
        <a
          href="https://www.instagram.com/khamisuniform/"
          className="social-button instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
          >
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/untoldposter/"
          className="social-button facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </a>
        <a href="https://wa.me/9724657608" className="social-button whatsapp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M19.077,4.928c-2.082-2.083-4.922-3.134-7.904-2.894C7.164,2.356,3.65,5.144,2.474,8.99 c-0.84,2.748-0.487,5.617,0.881,7.987L2.059,21.28c-0.124,0.413,0.253,0.802,0.67,0.691l4.504-1.207 c1.459,0.796,3.101,1.215,4.773,1.216h0.004c4.195,0,8.071-2.566,9.412-6.541C22.728,11.563,21.762,7.616,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767 c-0.125-0.167-1.019-1.353-1.019-2.581S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006 c0.178,0.007,0.375,0.016,0.562,0.431c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416 c-0.125,0.146-0.262,0.325-0.374,0.437c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728 c0.954,0.85,1.757,1.113,2.007,1.239c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978 s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812c0.25,0.125,0.416,0.187,0.478,0.291 C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
          </svg>
        </a>
      </div>
      <div style={{ flex: 1 }}></div> {/* Empty div for left spacing */}
      <div className="logo-container">
        <Logo />
      </div>
      <li className="language-toggle-item">
        <div className="language-toggle-container">
          <div className="language-dropdown" ref={dropdownRef}>
            <button
              className="language-dropdown-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Select language"
              aria-expanded={isOpen}
            >
              <Globe size={16} className="globe-icon" />
              <span className="current-language">{currentLanguage.name}</span>
              <ChevronDown
                size={14}
                className={`chevron ${isOpen ? "open" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="language-dropdown-menu">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`language-option ${
                      language.code === currentLang ? "active" : ""
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
      </li>
    </div>
  );
}
