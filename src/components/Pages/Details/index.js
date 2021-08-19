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
            <Image
              margin="0 0 0 10%"
              src="/assets/services/dart.svg"
              alt="logo"
            />
            <Title>As pessoas vão te encontrar</Title>
            <Divider />
            <Description>
              Estratégias de Google ADS e Facebook ADS para que você apareça nas
              buscas e em anúncios.
            </Description>
          </Item>
        </WrapperItem>
        <WrapperItem backgroundColor="#81c8d2">
          <Item>
            <Image src="/assets/services/heart.svg" alt="logo" />
            <Title>Seu conteúdo irá gerar conexão</Title>
            <Divider />
            <Description>
              Fazer posts manjados igual todo mundo não funciona mais. É preciso
              estratégia para se tornar referência em sua área.
            </Description>
          </Item>
        </WrapperItem>
        <WrapperItem backgroundColor="#77c2bf">
          <Item>
            <Image src="/assets/services/money.svg" alt="logo" />
            <Title>Seu faturamento vai aumentar</Title>
            <Divider />
            <Description>
              É um investimento no seu próprio negócio. Quanto mais pessoas você
              conquista, mais pacientes você atrai.
            </Description>
          </Item>
        </WrapperItem>
      </Grid>
      <BackgroundItem backgroundColor="#77c2bf" />
    </Wrapper>
  );
}
