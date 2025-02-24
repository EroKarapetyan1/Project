import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
export const MenuBtn = styled.div`
  position: absolute; 
  top: 50%;
  left: 20px;
  transform: translateY(-52%); 
  font-size: 30px;
  cursor: pointer;
  color: #000000;
`;




const slideInBounce = keyframes`
  0% {
    transform: translateX(100%); 
    opacity: 0;
  }
  40% {
    transform: translateX(-20px);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);  
  }
  80% {
    transform: translateX(-5px);  
  }
  100% {
    transform: translateX(0); 
    opacity: 1;
  }
`;


const slideOutBounce = keyframes`
  0% {
    transform: translateX(0); 
    opacity: 1;
  }
  40% {
    transform: translateX(10px); 
  }
  60% {
    transform: translateX(-20px); 
  }
  80% {
    transform: translateX(5px);  
  }
  100% {
    transform: translateX(100%); 
    opacity: 0;
  }
`;

export const Menubar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: right 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  svg{
&:hover{
  transition: 0.5s;
  transform: scale(1.4);
}  }
  animation: ${props => (props.$isOpen ? slideInBounce : slideOutBounce)} 1.3s ease forwards;
  @media(max-width: 600px){
    width: 160px;
}
`;






export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 80px;
  height: 550px;
  gap: 3px;
  
`;

export const Items = styled.div`
  margin-top: 10px;
  width: 90%;
  height: auto;
border: 1px solid black;
  margin-left: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  svg {
    color: #ffffff;
    font-size: 40px; 

  }

  p {
    margin-top: 18px;
    font-family: sans-serif;
    color: #000000;
  }

  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;




export const OpenIcon = styled.div`
font-size: 30px;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
&:hover{
  background-color: gray;
  border-radius: 50%;
  transform: scale(1.2);
}
@media (max-width:  450px) {
margin-left: -40px;



}
`