import Head from "next/head";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// Style
import { Container, Wrapper } from "./style";

const Layout = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title} - Agência Clinica</title>
      </Head>
      <Container {...props}>
        <Navbar title={title} />
        <Sidebar />
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
};
export default Layout;
