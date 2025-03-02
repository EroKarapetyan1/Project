import React from "react";
import { Footer } from "./styledFooter";
import { Img1, StyledLink } from "../header/header";
import { useLocation } from "react-router-dom";


export const MyFooter = () => {
    const loc = useLocation()
    return (
        <>


            {loc.pathname == "/" && <Footer>
                <span>Ero'sTechX®</span>
                {/* <img src="src/project/components/header/img/EroTechX1.jpeg" height={80} alt="" /> */}


                <StyledLink to={'/AllReviews'}>
                    <span>отзыви</span>

                </StyledLink>
            </Footer>}







        </>
    )
}