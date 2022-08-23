import React, { Suspense, useContext, useEffect } from "react";
import "../i18n";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
// import { LocaleContext } from "../context";

const MainPage = ({ location }) => {
  const { t } = useTranslation();
  console.log(location);
  return (
    <Suspense fallback="Loading ...">
      <Layout>
        <h1>{t(`navItems.main`)}</h1>
      </Layout>
    </Suspense>
  );
};

export default MainPage;
