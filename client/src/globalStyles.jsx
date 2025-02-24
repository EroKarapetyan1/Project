import styled from "styled-components";

export const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;  
  padding: 8px 16px;
  border-radius: 8px;
  color: #000000;  
  margin-top: 10px;
  @media (max-width: 225px) {
    text-align: center;
  }
 
`;

export const ProductCard = styled.div`
  color: black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  height: auto;
  gap: 10px;
  justify-content: space-between;  

  &:hover ${Price} {
    color: green;  
    transition: all 0.3s ease-in-out; 

  }
`;

export const IconSpan = styled.span`
margin-left: 30px;
display: flex;
justify-content: center;
align-items: center;
    font-size: 28px;

    @media (max-width: 380px) {

  margin-left: 60px;

}
@media (max-width: 290px) {
  font-size: 20px;


}

@media (max-width: 260px) {
  margin-left: 60px;

}
@media(max-width: 500px){
margin-left: 50px;


}
@media(max-width: 790px){
margin-left: 50px;


}

`

export const IconSpan1 = styled.span`
    color: red;
    font-size: 40px;
    top: 0;
    display: flex;
    padding-top: 10px;
    width: 100%;
    justify-content: right;
    svg {
      transition: all 0.3s ease-in-out; 
        color: #ff0000;
        &:hover {
            cursor: pointer;
            transform: scale(1.2);
            transition: all 0.3s ease-in-out; 
          }
    }
`


export const MainDiv = styled.div`
  display: flex;       
  justify-content: center; 
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;  
  width: 300px;
  margin: 20px;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.3s ease-in-out; 
  position: relative;
  
  /* img{
    transition: all 0.3s ease-in-out; 

  &:hover {
    transition: all 0.3s ease-in-out; 
    transform: scale(1.1);
  }
} */

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
`;


export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 100px;
  
  
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;  
  padding: 8px 16px;
  border-radius: 8px;
  color: #000000;  
  margin-top: 10px;
  
`;

export const Img = styled.div`
margin-top: 10px;
  width: 100%;     
  height: 220px;
  /* overflow: hidden; */
  display: flex;
  justify-content: center; 
  align-items: center;     
  border-radius: 10px;
  margin-bottom: 15px;
`;

