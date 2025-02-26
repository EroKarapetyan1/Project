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


export const Button = styled.button`
color: #ccc;
  border-radius: 20px;
  /* background: transparent;   */
  background-color: #3c7cb3;
  border: none;   
  padding: 10px 20px;       
  cursor: pointer;    
    transition: all 0.3s ease-in-out; 

  &:hover{
    cursor: pointer;
    transition: all 0.3s ease-in-out; 
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



export const ProductCard = styled.div`
  color: black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  height: auto;
  gap: 10px;
  justify-content: space-between;  
/* background-color: blue; */
background: transparent;
  &:hover ${Price} {
    /* color: green;   */
    color: #3c7cb3;
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
/* background: transparent; */
  display: flex;       
  justify-content: center; 
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;   */
  /* background-color: red; */
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;  

  }
`;


export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 100px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;  
  /* background-color: red; */

  
  
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

