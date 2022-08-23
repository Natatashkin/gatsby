import React from "react";
import "../i18n";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const RegistrationPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>{t(`navItems.registration`)}</h1>
    </Layout>
  );
};

export default RegistrationPage;
