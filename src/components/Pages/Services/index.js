import Link from "next/link";
import { Grid, Item, Image, Label } from "./style";

import { Wrapper } from "../../Helpers/style";

export default function Home() {
  return (
    <Wrapper>
      <Grid>
        <Item>
          <Image src="/assets/services/rocket.svg" alt="" />
          <Label className="fontSizeSecondary">Marketing Digital</Label>
        </Item>
        <Item>
          <Image src="/assets/services/video.svg" alt="" />
          <Label className="fontSizeSecondary">Produção de conteúdo</Label>
        </Item>
        <Item>
          <Image src="/assets/services/design.svg" alt="" />
          <Label className="fontSizeSecondary">Identidades visuais</Label>
        </Item>
        <Item>
          <Image src="/assets/services/heart.svg" alt="" />
          <Label className="fontSizeSecondary">Publicidade humanizada</Label>
        </Item>
      </Grid>
    </Wrapper>
  );
}
