import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import { navigate } from "gatsby";

const NAV_ITEMS = [
  { id: "main", path: "/" },
  { id: "registration", path: "/registration" },
  { id: "news", path: "/news" },
];

const Header = ({ location }) => {
  const [t, i18n] = useTranslation();
  const [currentLocale, setCurrentLocale] = useState(i18n.language);

  useEffect(() => {
    setCurrentLocale(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const newArr = location.pathname.split("/");
    const newStr = newArr.slice(2).join("/");
    navigate(`/${currentLocale}/${newStr}`);
  }, [currentLocale, location.pathname]);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "30px" }}>
        <Link to="/">LOGO</Link>
      </div>
      <ul style={{ listStyle: "none", display: "flex", padding: 0 }}>
        {NAV_ITEMS.map(({ id, path }) => (
          <li key={id} style={{ marginRight: "10px" }}>
            <Link to={path}>{t(`navItems.${id}`)}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button type="button" onClick={() => i18n.changeLanguage("ua")}>
          UA
        </button>
        <button type="button" onClick={() => i18n.changeLanguage("ru")}>
          RU
        </button>
      </div>
    </nav>
  );
};

export default Header;
