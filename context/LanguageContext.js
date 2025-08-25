// context/LanguageContext.js
import { createContext, useContext } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  // Ensure we have a valid locale, default to 'he' if undefined
  const currentLocale = locale || "he";

  const toggleLanguage = () => {
    try {
      let newLocale;
      if (currentLocale === "he") {
        newLocale = "ar";
      } else if (currentLocale === "ar") {
        newLocale = "en";
      } else {
        newLocale = "he";
      }

      // Normalize current path by removing existing locale prefix
      const basePath = (asPath || "/").replace(/^\/(en|he|ar)/, "");

      if (newLocale === "he") {
        // Go to root path with no locale prefix
        const targetPath = basePath === "" ? "/" : basePath;
        window.location.href = targetPath;
      } else {
        // Add locale prefix
        const targetPath = `/${newLocale}${
          basePath.startsWith("/") ? basePath : "/" + basePath
        }`;
        window.location.href = targetPath;
      }
    } catch (error) {
      console.error("Language switch error:", error);
      // Fallback to simple page reload
      window.location.reload();
    }
  };

  return (
    <LanguageContext.Provider value={{ lang: currentLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
