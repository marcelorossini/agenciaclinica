import { useRouter } from "next/router";

// Style
import { Container } from "./style";

import { ArrowBack } from "@styled-icons/boxicons-regular";

const Navbar = (props) => {
  const router = useRouter();
  const { title } = props;

  return (
    <Container>
      <ArrowBack onClick={() => router.back()} />
      { title || "Aryane Toffetti"}
    </Container>
  );
};
export default Navbar;
