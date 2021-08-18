import Home from "../components/Pages/Home";
import Services from "../components/Pages/Services";
import Contact from "../components/Pages/Contact";
import Customers from "../components/Pages/Customers";

import Page from "../components/Page";

import { Wrapper } from "../styles/index";

export default function Index() {
  return (
    <>  
      <Page backgroundColor="var(--color-primary)">
        <Wrapper>
          <Home />
        </Wrapper>
      </Page>
      <Page id="servicos" backgroundColor="var(--color-secondary)">
        <Wrapper>
          <Services />
        </Wrapper>
      </Page>
      <Page id="clientes" backgroundColor="var(--color-tertiary)">
        <Wrapper>
          <Customers />
        </Wrapper>
      </Page>
      <Page id="contato" backgroundColor="var(--color-secondary)">
        <Wrapper>
          <Contact />
        </Wrapper>
      </Page>      
      {/*
      
      <Page backgroundColor="var(--color-primary)">
        <Wrapper>
          <Home />
        </Wrapper>
      </Page>
        */}
    </>
  );
}
