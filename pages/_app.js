// pages/_app.js
import { LanguageProvider } from "../context/LanguageContext";
import React from "react";
import "../styles/global.css"; // You can import global styles here
import "../styles/customization.css";
function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
