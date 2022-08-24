exports.onClientEntry = () => {
  console.log(window.location.pathname);
  const currentLang = localStorage.getItem("lng");
  console.log(currentLang);

  if (window.location.pathname === "/") {
    window.location.pathname = currentLang ? `/${currentLang}` : "/ua";
  }
};
