// import React from "react";
// // import LocaleProvider from "./src/context";

// // export const wrapRootElement = ({ element }) => {
// //   return <LocaleProvider>{element}</LocaleProvider>;
// // };
const React = require("react");

exports.onClientEntry = () => {
  console.log(window.location.pathname);
  const currentLang = localStorage.getItem("lng");
  console.log(currentLang);

  if (window.location.pathname === "/") {
    window.location.pathname = currentLang ? `/${currentLang}` : "/ua";
  }
};
