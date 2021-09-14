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
import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function Customers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleInit = async () => {
      const response = await api.get(`customer?home=true`);
      setData(response.data);
    };
    handleInit();
  }, []);

  return (
    <Wrapper>
      <Grid>
        <GridSocialLinks>
          <ArrowButton>
            <ArrowIosBack />
          </ArrowButton>
          {data.map((item) => 
            <Item href={`/clientes/${item.url}`} target="_blank">
              <CostumerImage>
                <img src={item.profile_image} alt="" />
              </CostumerImage>
              <CostumerName className="fontSizeSecondary">
                {item.name}
              </CostumerName>
              <CostumerOccupation>{item.description}</CostumerOccupation>
            </Item>
          )}
          <ArrowButton>
            <ArrowIosForward />
          </ArrowButton>
        </GridSocialLinks>
      </Grid>
    </Wrapper>
  );
}
