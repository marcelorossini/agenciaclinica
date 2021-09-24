import {
  Grid,
  Title,
  Item,
  CostumerImage,
  CostumerName,
  CostumerOccupation,
  ArrowButton,
} from "./style";



import { Wrapper } from "../../Helpers/style";
import { useEffect, useState } from "react";
import api from "../../../services/api";

import Slider from "../../Helpers/Slider";

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
        <Title className="fontTitle">clientes</Title>
        {data.length > 0 && (
          <Slider>
            {data.map((item, index) => (
              <Item href={`/clientes/${item.url}`} target="_blank" key={index}>
                <CostumerImage>
                  <img src={item.profile_image} alt="" />
                </CostumerImage>
                <CostumerName className="fontSizeSecondary">
                  {item.name}
                </CostumerName>
                <CostumerOccupation>{item.description}</CostumerOccupation>
              </Item>
            ))}
          </Slider>
        )}
      </Grid>
    </Wrapper>
  );
}

