import Link from "next/link";
import { Grid, GridSocialLinks, Item, Label } from "./style";

import { Facebook, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import { Mail } from "@styled-icons/fluentui-system-regular";
import { Location } from '@styled-icons/ionicons-outline/'

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
        <Item href="https://www.google.com/maps/place/Ag%C3%AAncia+Cl%C3%ADnica+-+Marketing+Digital/@-22.2981965,-48.5608008,17z/data=!3m1!4b1!4m5!3m4!1s0x94c75984c811af1f:0x5cb0bf42be8983f2!8m2!3d-22.298155!4d-48.5585424" target="_blank">
          <Location />
        </Item>
      </GridSocialLinks>
      <div>
        <Label className="fontSizeSecondary">
          Aryane Toffetti | (14) 99181-4270
        </Label>
        <Label className="fontSizeSecondary">
          Rua Paissandu, Nº 333, Sala 3 - Centro - Jaú/SP
        </Label>
        <Label className="fontSizeSecondary">
          contato@agenciaclinica.com.br
        </Label>
      </div>
    </Grid>
  );
}
