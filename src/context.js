import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState(i18n.language);
  // console.log(currentLocale);

  useEffect(() => {
    setCurrentLocale(i18n.language);
  }, [i18n.language]);

  return (
    <LocaleContext.Provider value={{ currentLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
