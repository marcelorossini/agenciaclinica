import Head from "next/head";

import { Facebook, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import { Phone } from "@styled-icons/boxicons-regular";
import { Location } from "@styled-icons/ionicons-outline";

import Page from "../../components/Helpers";

import {
  Grid,
  Image,
  Button,
  Name,
  Description,
  WrapperButtons,
  Footer,
} from "../../styles/clientes";

export async function getServerSideProps(context) {
  return {
    props: {
      data: {
        name: "Oziliero & Jorge Advogados",
        description: "xxx",
        whatsapp: "xxx",
        facebook: "xxx",
        phone: "xxx",
        instagram: "xxx",
        address: "xxx",
      },
    },
  };
}

const Clientes = ({ data }) => {
  const { name, description, whatsapp, facebook, phone, instagram, address } = data

  return (
    <>
      <Head>
        <title>{name} - Agência Clinica</title>
      </Head>
      <Page
        backgroundImage={
          "https://linktree.com.br/new/uploads/backgrounds/bc42f4f1aa8bd3c6a1b298b3aeb23f64.jpg"
        }
      >
        <Grid>
          <Image src="https://linktree.com.br/new/uploads/avatars/0d6403b7228353f5265b234b9bff9358.jpg" />
          <Name>{ name }</Name>
          <Description>
            { description }
          </Description>
          <WrapperButtons>
            <Button target="_blank" href={ whatsapp }>
              <Whatsapp /> WhatsApp
            </Button>
            <Button target="_blank" href={ instagram }>
              <Instagram /> Instagram
            </Button>
            <Button target="_blank" href={ phone }>
              <Phone /> Telefone
            </Button>
            <Button target="_blank" href={ address }>
              <Location /> Endereço
            </Button>
            <Button target="_blank" href={ facebook }>
              <Facebook /> Facebook
            </Button>
          </WrapperButtons>
          <Footer>💡 Agência de Marketing @soluplim</Footer>
        </Grid>
      </Page>
    </>
  );
};

export default Clientes;
