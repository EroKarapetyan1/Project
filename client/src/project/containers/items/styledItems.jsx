import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;


  @media (max-width: 950px) {
    /* display: none; */
    /* flex-direction: column;   */
flex-direction: column;
    align-items: center;
    margin-top: 40px;     
    gap    : 30px;
  }

`;

export const Items = styled.div`
  margin-top: -10px;
  width: 150px;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  transition: 0.3s;

  svg {
    color: #000000;
    font-size: 40px;
    display: flex;      
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;

 
  }

  p {
    margin-top: 18px;
    font-family: sans-serif;
  }
  &:hover {
    color: green;  
  }

  cursor: pointer;
  @media(max-width: 800px){

  }

  @media (max-width: 480px) {
    width: 120px;  
    height: 120px; 
    
    svg {
      font-size: 30px; 
    }

    p {
      font-size: 12px;  
      margin-top: 10px;  
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
