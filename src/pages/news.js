import React from "react";
import "../i18n";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const NewsPage = ({ location }) => {
  const { t } = useTranslation();
  return (
    <Layout location={location}>
      <h1>{t(`navItems.news`)}</h1>
    </Layout>
  );
};

export default NewsPage;
