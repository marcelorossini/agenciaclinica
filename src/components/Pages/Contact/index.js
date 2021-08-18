import Link from "next/link";
import { Grid, GridSocialLinks, Item, Label } from "./style";

import { Facebook, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import { Mail } from "@styled-icons/fluentui-system-regular";

export default function Home() {
  return (
    <Grid>
      <Label className="fontSizePrimary">entre em contato:</Label>
      <GridSocialLinks>
        <Item href="https://www.facebook.com/agenciaclinica" target="_blank">
          <Facebook />
        </Item>
        <Item href="https://api.whatsapp.com/send?phone=5514991814270&text=Ol%C3%A1%2C%20estou%20pronto%20para%20mudar%20a%20cara%20do%20meu%20neg%C3%B3cio!" target="_blank">
          <Whatsapp />
        </Item>
        <Item href="https://www.instagram.com/agenciaclinica" target="_blank">
          <Instagram />
        </Item>
        <Item href="mailto:contato@agenciaclinica.com.br?subject=Contato" target="_blank">
          <Mail />
        </Item>
      </GridSocialLinks>
      <div>
        <Label className="fontSizeSecondary">
          Aryane Toffetti | (14) 99181-4270
        </Label>
        <Label className="fontSizeSecondary">
          contato@agenciaclinica.com.br
        </Label>
      </div>
    </Grid>
  );
}
