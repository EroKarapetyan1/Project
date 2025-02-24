import styled from "styled-components";

export const KorzinaDiv = styled.div`

width: 100%;
background-color: blue;
  display: flex;
  font-size: 24px;
  justify-content: flex-end; 
 cursor: pointer;
 margin-left: 20px;
  transition: 0.3s;
  &:hover{
    color: red;
  }
  @media (max-width: 700px) {
justify-content: center;
}
@media (max-width: 560px) {
justify-content: left;
}

`;
export const Card1 = styled.div`
font-size: 20px;


`