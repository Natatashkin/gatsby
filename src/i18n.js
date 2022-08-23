import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const options = {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  lookupQuerystring: "lng",
  lookupCookie: "lng",
  lookupLocalStorage: "lng",
  lookupSessionStorage: "lng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"],

  cookieMinutes: 10,
  cookieDomain: "myDomain",

  htmlTag: document.documentElement,

  cookieOptions: { path: "/", sameSite: "strict" },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "ua",
    lng: "ua",
    detection: options,
    debug: true,
    backend: {
      loadPath: "http://api.epn.proconsult.top/{{lng}}/translationl/all/",
      parse: (data) => JSON.parse(data).data,
      // preload: true,
    },
  });

export default i18n;
