import { Component } from "./style";

const Slider = props => {
const { children, settings = {} } = props

    return(
        <Component {...settings}>
            {children}
        </Component>
    )
}

export default Slider