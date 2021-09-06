import { useRouter } from "next/router";

// Style
import { Container, Username, Logo, List } from "./style";

const Sidebar = (props) => {
  const router = useRouter()
  
  return (
    <Container {...props}>
      <Username>Aryane Toffetti</Username>
      <List>
        <li onClick={() => router.push("/admin/cadastro/clientes")}>Clientes</li>
        <li onClick={() => router.push("/admin/cadastro/pre-cadastro")}>Pré-Cadastro</li>
        <li onClick={() => router.push("/admin/logout")}>Sair</li>
      </List>
      <Logo>
        <img src="/assets/logo.svg" alt="logo" />
      </Logo>
    </Container>
  );
};
export default Sidebar;
