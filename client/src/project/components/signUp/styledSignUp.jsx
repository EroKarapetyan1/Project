import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card2 = styled.div`
    
font-size: 40px;

`


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;

`;



export const Button = styled.button`
  border-radius: 20px;
  background: transparent;  
  border: 1px solid #ccc;   
  padding: 10px 20px;       
  cursor: pointer;    
  &:hover{
    cursor: pointer;
    transition: 0.3s ;
    transform: scale(1.2);
  }      
`;



export const InputWrapper1 = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
justify-content: center;
  position: relative;
  width: 500px;
  height: 500px;
  margin-right: 20px;
  @media(max-width: 700px){
    width: 230px;
  }
  @media (max-width: 450px) {
    width: 150px;
  }
  input{
    width: 400px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid black;
    
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



export const MainDiv1 = styled.div`
  margin-top: 200px;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

`