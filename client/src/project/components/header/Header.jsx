import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 70px;
  background-color: #3c7cb3;
/* color: #3c7cb3; */
color: #a4c0d8;
    /* background-color: #171010; */
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  display: flex;
  align-items: center;
  position: fixed;  
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 20px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  justify-content: left; 
  
`;

export const InputWrapper = styled.div`
display: flex;
box-shadow: rgb(3, 3, 3) 0px 2px 8px 0px;  
border-radius: 30px;
align-items: center;
  position: relative;
  width: 500px;
  margin-left: 20px;
  /* margin-right: 20px; */
  @media(max-width: 700px){
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 150px;
  }


  @media (max-width: 450px) {
  width: 100px;
}
  input{
    border: none;
    width: 500px;
    border-radius: 30px;
position: relative;

padding-left: 20px;
@media (max-width: 700px) {
 width : 200px;
}
@media (max-width: 450px) {
  width: 100px;
}


  }
`;

export const Img1 = styled.div`
display: flex;
justify-content: center; 
align-items: center;
position: absolute;
/* margin-top: 250px; */
/* right: 0;  */
left: 0;
/* transform: translateY(-50%);  */
background-color: #D7D7D7;
box-shadow: rgba(0, 0, 0, 0.469) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
@media (max-width: 700px) {
  /* margin-top: 150px; */

}

@media(max-width: 500px){
  height: 30;
  /* display: none; */
}

`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
`;

export const Icon = styled.div`

font-size: 25px;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
transition: all 1s;
 width: 70px;
  height: 59px;
@media(max-width: 290px){
font-size: 20px;

}

&:hover{
  /* width: 70px; */
  /* height: 59px; */
  background-color: #80808074;
  /* border-radius: #cecece */
  /* transform: scale(1.2); */
  transition: all 1s;
}
`

export const HeaderIcon = styled.div`
margin-left: 30px;
  display: flex;
  text-align: center;
  gap: 20px;
  align-items: center;


  @media(max-width: 290px){
gap: 10px;


}





`
