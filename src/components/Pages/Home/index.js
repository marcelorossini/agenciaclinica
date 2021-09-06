import Link from "next/link";
import { Background, Lines, Grid, Navbar, NavbarItem, Logo, Footer, Button } from "./style";

import { Wrapper } from "../../Helpers/style";

export default function Home() {
  return (
    <Wrapper>
      <Grid>
        <Navbar className="fontSizePrimary">
          <NavbarItem>
            <Link href="#servicos">serviços</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#clientes">clientes</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#contato">contato</Link>
          </NavbarItem>
        </Navbar>

        <Logo>
          <img src="/assets/logo.svg" alt="logo" />
        </Logo>
        
        <Button>Faça aqui seu pré-cadastro para o lançamento!</Button>

        <Footer className="fontSizeSecondary">
          Agência especializada em profissionais da saúde
        </Footer>
      </Grid>
      <Background />
      <Lines />
    </Wrapper>
  );
}
