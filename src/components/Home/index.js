import Link from "next/link";
import { Grid, Navbar, NavbarItem, Logo, Footer } from "./style";

export default function Home() {
  return (
    <Grid>
      <Navbar>
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
        <img src="/logo.svg" alt="logo" />
      </Logo>

      <Footer>Agência especializada em profissionais da saúde</Footer>
    </Grid>
  );
}
