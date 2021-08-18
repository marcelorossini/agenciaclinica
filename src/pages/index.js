import Home from "../components/Home";
import Services from "../components/Services";

import {
  Page,
  Wrapper
} from "../styles/index";

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
          
        </Wrapper>
      </Page>
      <Page id="contato" backgroundColor="var(--color-secondary)">
        <Wrapper>
          
        </Wrapper>
      </Page>                  
    </>
  );
}
