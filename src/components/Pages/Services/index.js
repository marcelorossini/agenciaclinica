import Link from "next/link";
import { Grid, Item, Label} from "./style";

import { Rocket, Vector, Heart } from "@styled-icons/boxicons-regular";
import { Videos } from "@styled-icons/boxicons-solid";

export default function Home() {
  return (
    <Grid>
      <Item>
        <Rocket />
        <Label className="fontSizeSecondary">Marketing Digital</Label>
      </Item>
      <Item>
        <Videos />
        <Label className="fontSizeSecondary">Produção de conteúdo</Label>
      </Item>
      <Item>
        <Vector />
        <Label className="fontSizeSecondary">Identidades visuais</Label>
      </Item>
      <Item>
        <Heart />
        <Label className="fontSizeSecondary">Publicidade humanizada</Label>
      </Item>
    </Grid>
  );
}
