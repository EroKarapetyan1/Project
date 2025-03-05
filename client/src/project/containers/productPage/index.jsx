import React, { useState, useEffect } from "react";
import productApi from "../../api/servicesApi";
import { useParams } from "react-router-dom"
import { IconSpan1, Img, Main, MainDiv, Name, Price, ProductCard } from "../../../globalStyles";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
export const Products = () => {
    const [productData, setProductData] = useState({})
    const params = useParams()
    console.log(params);

    useEffect(() => {
        const getData = async () => {
            try {
                console.log(params.id);

                const response = await productApi.GetProductsById(params.id)
                setProductData(response.data.data)

            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, []);
    console.log(productData);
    
    return (
        <Main>


            <MainDiv>

                <ProductCard>
                    {productData.basket?.includes(userId) ? (
                        <IconSpan1 onClick={() => addToBasket(productData._id)}>
                            <IoMdHeart />
                        </IconSpan1>
                    ) : (
                        <IconSpan1 onClick={() => addToBasket(productData._id)}>
                            <IoMdHeartEmpty />
                        </IconSpan1>
                    )}
                    <Img>
                        <img
                            src={`http://localhost:3001/uploads/${productData.image}`}
                            alt={productData.modelName}
                            style={{ width: "100%", }}
                        />
                    </Img>
                    <Name>{productData.modelName}</Name>

                    <Price>{productData.price} AMD</Price>
                </ProductCard>

            </MainDiv>


        </Main>


    );
};