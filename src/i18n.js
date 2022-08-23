import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "ua",
    debug: true,
    backend: {
      loadPath: "http://api.epn.proconsult.top/{{lng}}/translationl/all/",
      parse: (data) => JSON.parse(data).data,
      // preload: true,
    },
  });

export default i18n;
