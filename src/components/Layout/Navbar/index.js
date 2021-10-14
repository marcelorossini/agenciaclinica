import { useRouter } from "next/router";

// Style
import { Container, ButtonMenu } from "./style";

import { ArrowBack, Menu } from "@styled-icons/boxicons-regular";

const Navbar = (props) => {
  const router = useRouter();
  const { title, handleToogleSidebar } = props;

  return (
    <Container>
      <ButtonMenu onClick={() => handleToogleSidebar()}>
        <Menu />
      </ButtonMenu>
      <ArrowBack onClick={() => router.back()} />
      { title || "Aryane Toffetti"}
    </Container>
  );
};
export default Navbar;
