import React from "react";
// import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import { LocalizedLink as Link } from "gatsby-theme-i18n";

const NAV_ITEMS = [
  { id: "main", path: "/" },
  { id: "registration", path: "/registration" },
  { id: "news", path: "/news" },
];

const Header = () => {
  const [t, i18n] = useTranslation();
  // const currentlang = i18n.language;
  // console.log(currentlang);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
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
