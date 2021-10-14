import { Grid, GridSocialLinks, Item, Title, Footer } from "./style";

import { Facebook, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import { Location } from "@styled-icons/ionicons-outline/";

export default function Home() {
  return (
    <Grid>
      <Title>
        <h1 className="fontTitle">entre em contato:</h1>
      </Title>
      <GridSocialLinks>
        <Item href={process.env.NEXT_PUBLIC_WHATSAPP_URL} target="_blank">
          <Whatsapp />
        </Item>
        <Item href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank">
          <Facebook />
        </Item>
        <Item href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank">
          <Instagram />
        </Item>
        <Item href={process.env.NEXT_PUBLIC_MAPS_URL} target="_blank">
          <Location />
        </Item>
      </GridSocialLinks>
      <div>
        <Footer>Aryane Toffetti | (14) 99181-4270</Footer>
        <Footer>Rua Paissandu, Nº 333, Sala 3 - Centro - Jaú/SP</Footer>
        <Footer>contato@agenciaclinica.com.br</Footer>
      </div>
    </Grid>
  );
}
