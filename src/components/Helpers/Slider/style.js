import styled from 'styled-components'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Component = styled(Slider)`
    position: relative;
    z-index: 0;
    width: 100%;
    max-width: 680px;

    .slick-prev:before, .slick-next:before {
        display: none;
    }
`