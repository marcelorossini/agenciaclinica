import Head from "next/head";

import Home from "../components/Pages/Home";
import Details from "../components/Pages/Details";
import Services from "../components/Pages/Services";
import Contact from "../components/Pages/Contact";
import Customers from "../components/Pages/Customers";

import Page from "../components/Helpers";

export default function Index() {
  return (
    <>
      <Head>
        <title>Agência Clinica  - Marketing Digital para Profissionais da Saúde</title>
      </Head>
      <Page backgroundColor="var(--color-primary)" fixMinWidthIos={true}>
        <Home />
      </Page>
      <Page id="details">
        <Details />
      </Page>
      <Page id="servicos" backgroundColor="#ffffff">
        <Services />
      </Page>
      <Page id="clientes" backgroundColor="var(--color-secondary)">
        <Customers />
      </Page>
      <Page id="contato" backgroundColor="var(--color-tertiary)">
        <Contact />
      </Page>
    </>
  );
}
