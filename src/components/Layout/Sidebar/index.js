import { useRouter } from "next/router";

// Style
import { Container, Username, Logo, List, CloseButton } from "./style";
import { Close } from "@styled-icons/material";

const Sidebar = (props) => {
  const { handleToogleSidebar } = props
  const router = useRouter();

  return (
    <Container {...props}>
      <Username>Aryane Toffetti</Username>
      <CloseButton onClick={() => handleToogleSidebar()}>
        <Close />
      </CloseButton>
      <List onClick={() => handleToogleSidebar(false)}>
        <li onClick={() => router.push("/admin/cadastro/clientes")}>
          Clientes
        </li>
        <li onClick={() => router.push("/admin/cadastro/pre-cadastro")}>
          Pré-cadastro
        </li>
        <li onClick={() => router.push("/admin/logout")}>Sair</li>
      </List>
      <Logo>
        <img src="/assets/logo.svg" alt="logo" />
      </Logo>
    </Container>
  );
};
export default Sidebar;
