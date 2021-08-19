import Link from "next/link";
import {
  Wrapper,
  BackgroundItem,
  Grid,
  WrapperItem,
  Item,
  Divider,
  Image,
  Title,
  Description,
} from "./style";

export default function Home() {
  return (
    <Wrapper>
      <BackgroundItem backgroundColor="#2ea498" />
      <Grid>
        <WrapperItem backgroundColor="#2ea498">
          <Item>
            <Image src="/assets/details/dart.svg" alt="" />
            <Title className="fontSizeSecondary">As pessoas vão te encontrar</Title>
            <Divider />
            <Description>
              Estratégias de Google ADS e Facebook ADS para que você apareça nas
              buscas e em anúncios.
            </Description>
          </Item>
        </WrapperItem>
        <WrapperItem backgroundColor="#1cc2b8">
          <Item>
            <Image src="/assets/details/heart.svg" alt="" />
            <Title className="fontSizeSecondary">Seu conteúdo irá gerar conexão</Title>
            <Divider />
            <Description>
              Fazer posts manjados igual todo mundo não funciona mais. É preciso
              estratégia para se tornar referência em sua área.
            </Description>
          </Item>
        </WrapperItem>
        <WrapperItem backgroundColor="#74d2e7">
          <Item>
            <Image src="/assets/details/money.svg" alt="" />
            <Title className="fontSizeSecondary">Seu faturamento vai aumentar</Title>
            <Divider />
            <Description>
              É um investimento no seu próprio negócio. Quanto mais pessoas você
              conquista, mais pacientes você atrai.
            </Description>
          </Item>
        </WrapperItem>
      </Grid>
      <BackgroundItem backgroundColor="#74d2e7" />
    </Wrapper>
  );
}
