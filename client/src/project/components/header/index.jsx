import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
// import { GlobalStyle, HeaderDiv, Img1,  StyledLink, } from "./Header";
import { Link } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { GlobalStyle, HeaderDiv, HeaderIcon, Icon, Img1, InputWrapper, StyledLink } from "./header";
import { Korzina } from "../Korzina/Korzina1";
import { Loginicon } from "../signUp/signUpicon";
import { Filter } from "../filter/Filter";
import { IconSpan } from "../../../globalStyles";
import { ProductFilter } from "../filter/product-filter";
export const MyHeader = ({fun}) => {
  const [isActive, setIsActive] = useState(false)
  const [filtred, setFiltres] = useState([])
  const inputRef = useRef(null);


  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  const handleSearchClick = () => {
    setIsActive((e) => !e);
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }



    // const newArr = product.filter(el => el.modelName.toLowerCase().includes(el.target.value.toLowerCase()))
    // setFiltres(newArr)
  };


  return (
    <>
      {/* <HeaderDiv>
        <GlobalStyle />
        <StyledLink to="/">
          <Img1>
            <img src={"src/project/components/header/img/EroTechX1.jpeg"} height={100} alt="Home Logo" />
          </Img1>
        </StyledLink>

        <InputWrapper>
          <input ref={inputRef} type="text" placeholder="Որոնել..." />
          <Icon>
            <IoSearch onClick={handleSearchClick} style={{ cursor: "pointer" }} />

          </Icon>

        </InputWrapper>


            <Filter />
            <Korzina />
            <Loginicon />


      </HeaderDiv> */}


      <HeaderDiv>
        <StyledLink to={'/'}>
          <Img1>
            <img src="src/project/components/header/img/EroTechX1.jpeg" height={70} alt="" />

          </Img1>
        </StyledLink>


        <IconSpan>
          <IoSearch onClick={handleSearchClick} style={{ cursor: "pointer", }} />
        </IconSpan>


        {isActive && <>


          <InputWrapper>

            <input type="text" onChange={(e) => fun(e.target.value)}/>

          </InputWrapper>
        </>}
        <HeaderIcon>





          <Korzina />
          <Loginicon />
        </HeaderIcon>

      </HeaderDiv>


      {/* <nav>
        <div className="nav-wrapper">

          <a href="/" className="brand-logo"><img src={"src/project/components/header/img/EroTechX1.jpeg"} height={65} margin alt="" /></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav> */}
    </>
  );
};
