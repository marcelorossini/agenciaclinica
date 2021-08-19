import {
  Grid,
  GridSocialLinks,
  Item,
  CostumerImage,
  CostumerName,
  CostumerOccupation,
  ArrowButton,
} from "./style";

import { ArrowIosBack, ArrowIosForward } from "@styled-icons/evaicons-solid";

import { Wrapper } from "../../Helpers/style";

export default function Customers() {
  return (
    <Wrapper>
      <Grid>
        <GridSocialLinks>
          <ArrowButton>
            <ArrowIosBack />
          </ArrowButton>
          <Item
            href="https://api.whatsapp.com/send?phone=5514991814270&text=Ol%C3%A1%2C%20estou%20pronto%20para%20mudar%20a%20cara%20do%20meu%20neg%C3%B3cio!"
            target="_blank"
          >
            <CostumerImage
              src="https://scontent.fbau3-1.fna.fbcdn.net/v/t1.6435-9/110111374_985306231901036_3680839823344956507_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=I9bhZ0H75DoAX_T1a7j&_nc_ht=scontent.fbau3-1.fna&oh=69933fbb84facfa1e46082574009ee1c&oe=6142C333"
              alt=""
            />
            <CostumerName className="fontSizeSecondary">
              André Fisio
            </CostumerName>
            <CostumerOccupation>Teste</CostumerOccupation>
          </Item>
          <Item href="https://www.instagram.com/agenciaclinica" target="_blank">
            <CostumerImage
              src="https://scontent.fbau3-1.fna.fbcdn.net/v/t1.6435-9/110111374_985306231901036_3680839823344956507_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=I9bhZ0H75DoAX_T1a7j&_nc_ht=scontent.fbau3-1.fna&oh=69933fbb84facfa1e46082574009ee1c&oe=6142C333"
              alt=""
            />
            <CostumerName className="fontSizeSecondary">
              André Fisio
            </CostumerName>
            <CostumerOccupation>Teste</CostumerOccupation>
          </Item>
          <Item
            href="mailto:contato@agenciaclinica.com.br?subject=Contato"
            target="_blank"
          >
            <CostumerImage
              src="https://scontent.fbau3-1.fna.fbcdn.net/v/t1.6435-9/110111374_985306231901036_3680839823344956507_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=I9bhZ0H75DoAX_T1a7j&_nc_ht=scontent.fbau3-1.fna&oh=69933fbb84facfa1e46082574009ee1c&oe=6142C333"
              alt=""
            />
            <CostumerName className="fontSizeSecondary">
              André Fisio
            </CostumerName>
            <CostumerOccupation>Teste</CostumerOccupation>
          </Item>
          <ArrowButton>
            <ArrowIosForward />
          </ArrowButton>
        </GridSocialLinks>
      </Grid>
    </Wrapper>
  );
}
