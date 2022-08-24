import React, { Suspense } from "react";
import "../i18n";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const RegistrationPage = ({ location }) => {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Loading ...">
      <Layout location={location}>
        <h1>{t(`navItems.registration`)}</h1>
      </Layout>
    </Suspense>
  );
};

export default RegistrationPage;
