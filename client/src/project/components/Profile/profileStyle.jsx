import styled from "styled-components";

export const ProfileDiv = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
`;

export const Name = styled.p`
    color: black;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 5px 0;
    @media (max-width: 400px) {
   font-size: 10px;
     }
`;

export const Div = styled.div`
    box-shadow: rgb(0, 0, 0) 0px 2px 8px 0px;
    width: 600px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    @media (max-width: 650px) {
   width: 300px;
     }
     @media (max-width: 400px) {
   
   width: 200px;
     }

`;