import {
  Grid,
  Title,
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
        <Title>clientes</Title>
        {data.length > 0 &&
        <Slider
          settings={{
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            prevArrow: <ArrowButton><div><ArrowIosBack /></div></ArrowButton>,
            nextArrow: <ArrowButton><div><ArrowIosForward /></div></ArrowButton>,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },        
            ]          
          }}
        >
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
        }
      </Grid>
    </Wrapper>
  );
}
