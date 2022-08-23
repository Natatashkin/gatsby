import React from "react";
import "../i18n";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>{t(`navItems.news`)}</h1>
    </Layout>
  );
};

export default NewsPage;
