import styled from "styled-components";


export const FilterIcon = styled.div`
position: fixed;
background-color: red;
font-size: 25px;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
/* width: 60px; */
height: 40px;

cursor: pointer;
&:hover{
  /* background-color: gray; */
  /* border-radius: 50%; */
  transform: scale(1.2);
}

`;


export const FilterBar = styled.div`
margin-top: 40px;

  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-300px")};  
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  padding: 20px;
  z-index: 999;  
`;

