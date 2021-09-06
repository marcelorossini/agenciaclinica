import Link from "next/link";
import { Grid, List, Item, Image, Label, Title } from "./style";

import { Wrapper } from "../../Helpers/style";

export default function Home() {
  return (
    <Wrapper>
      <Grid>
        <Title>
          <span>nossos serviços</span>
        </Title>
        <List>
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
        </List>
      </Grid>
    </Wrapper>
  );
}
