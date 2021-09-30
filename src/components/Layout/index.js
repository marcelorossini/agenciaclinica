import Head from "next/head";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Loading from "../Helpers/Loading";

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
        <Loading active={props.loading} />
      </Container>
    </>
  );
};
export default Layout;
