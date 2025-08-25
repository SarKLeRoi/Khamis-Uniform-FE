// context/LanguageContext.js
import { createContext, useContext } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const toggleLanguage = () => {
    let newLocale;
    if (locale === "he") {
      newLocale = "ar";
    } else if (locale === "ar") {
      newLocale = "en";
    } else {
      newLocale = "he";
    }

    // Normalize current path by removing existing locale prefix
    const basePath = asPath.replace(/^\/(en|he|ar)/, "");

    if (newLocale === "he") {
      // Go to root path with no locale prefix
      window.location.href = basePath === "" ? "/" : basePath;
    } else {
      // Add locale prefix
      window.location.href = `/${newLocale}${
        basePath.startsWith("/") ? basePath : "/" + basePath
      }`;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang: locale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
