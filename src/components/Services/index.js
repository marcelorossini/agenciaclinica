import Link from "next/link";
import { Grid, Item } from "./style";

import { Rocket, Vector, Heart, Label } from "@styled-icons/boxicons-regular";
import { Videos } from "@styled-icons/boxicons-solid";

export default function Home() {
  return (
    <Grid>
      <Item>
        <Rocket />
        <Label>Marketing Digital</Label>
      </Item>
      <Item>
        <Videos />
        <Label>Produção de conteúdo</Label>
      </Item>
      <Item>
        <Vector />
        <Label>Identidades visuais</Label>
      </Item>
      <Item>
        <Heart />
        <Label>Publicidade humanizada</Label>
      </Item>
    </Grid>
  );
}
