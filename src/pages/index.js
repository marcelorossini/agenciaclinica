import Home from "../components/Pages/Home";
import Details from "../components/Pages/Details";
import Services from "../components/Pages/Services";
import Contact from "../components/Pages/Contact";
import Customers from "../components/Pages/Customers";

import Page from "../components/Page";

export default function Index() {
  return (
    <>
      <Page backgroundColor="var(--color-primary)">
        <Home />
      </Page>
      <Page id="servicos" backgroundColor="var(--color-secondary)">
        <Details />
      </Page>
      <Page id="clientes" backgroundColor="var(--color-tertiary)">
        <Services />
      </Page>
      <Page id="clientes" backgroundColor="var(--color-tertiary)">
        <Customers />
      </Page>
      <Page id="contato" backgroundColor="var(--color-secondary)">
        <Contact />
      </Page>
    </>
  );
}
