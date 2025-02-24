import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { KorzinaDiv } from "./styledKorzina";
import { Icon, StyledLink } from "../header/header";
// import { StyledLink } from "../header/header";

export const Korzina = () => {
    return (
        // <KorzinaDiv>

          <StyledLink to={"/basket"}>
        <Icon>
          <FaShoppingCart  />

        </Icon>
          
          </StyledLink>
            
        // </KorzinaDiv>
    );
};
