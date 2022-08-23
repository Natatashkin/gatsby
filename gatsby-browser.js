// import React from "react";
// // import LocaleProvider from "./src/context";

// // export const wrapRootElement = ({ element }) => {
// //   return <LocaleProvider>{element}</LocaleProvider>;
// // };

exports.onClientEntry = () => {
  console.log(window.location.pathname);
  // console.log(localStorage.getItem("i18nextLng"));
  const currentLang = localStorage.getItem("i18nextLng");

  if (window.location.pathname === "/") {
    window.location.pathname = currentLang ? `/${currentLang}` : "/ua";
  }
};
