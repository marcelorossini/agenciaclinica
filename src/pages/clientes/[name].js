import { Facebook, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import { Phone } from '@styled-icons/boxicons-regular'
import { Location } from '@styled-icons/ionicons-outline'

import Page from "../../components/Helpers";

import { Grid, Image, Button, Name, Description, WrapperButtons, Footer } from "../../styles/clientes";

const Clientes = () => {
  return (
    <Page backgroundImage={'https://linktree.com.br/new/uploads/backgrounds/bc42f4f1aa8bd3c6a1b298b3aeb23f64.jpg'}>
      <Grid>
        <Image src="https://linktree.com.br/new/uploads/avatars/0d6403b7228353f5265b234b9bff9358.jpg" />
        <Name>Oziliero & Jorge Advogados</Name>
        <Description>Precisa de orientação jurídica? Nós estamos prontos para te ajudar.</Description>
        <WrapperButtons>
          <Button><Whatsapp /> WhatsApp</Button>
          <Button><Instagram /> Instagram</Button>
          <Button><Phone /> Telefone</Button>
          <Button><Location /> Endereço</Button>
          <Button><Facebook /> Facebook</Button>
        </WrapperButtons>
        <Footer>💡 Agência de Marketing @soluplim</Footer>
      </Grid>
    </Page>
  );
};

export default Clientes;
