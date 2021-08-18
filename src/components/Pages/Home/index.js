import Link from "next/link";
import { Background, Lines, Grid, Navbar, NavbarItem, Logo, Footer } from "./style";

export default function Home() {
  return (
    <>
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

        <Footer className="fontSizeSecondary">
          Agência especializada em profissionais da saúde
        </Footer>
      </Grid>
      <Background />
      <Lines />
    </>
  );
}