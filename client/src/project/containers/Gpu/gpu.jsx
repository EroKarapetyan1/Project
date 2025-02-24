import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import productApi, { useFetchProducts } from "../../api/servicesApi";
import { Img, MainDiv, Name, Price, ProductCard, Main, IconSpan1 } from "../../../globalStyles";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Filter } from "../../components/filter/Filter";

export const Gpu = () => {
    const [active, SetActive] = useState(false)

    const fetchedItems = useFetchProducts();
    const [items, setItems] = useState([]);
    const filteredItems = items.filter((item) => item.category === "Video-cards");

    const userId = localStorage.getItem("userId");


    useEffect(() => {
        setItems(fetchedItems);
    }, [fetchedItems]);

    const addToBasket = async (id) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in");
            return;
        }

        try {
            const response = await productApi.addToBasket(token, id);
            if (response.data.status === "added") {

            } else if (response.data.status === "removed") {

            }


            setItems((prevItems) =>
                prevItems.map((item) =>
                    item._id === id
                        ? {
                            ...item, basket: response.data.status === "added"
                                ? [...(item.basket || []), userId]
                                : item.basket.filter(b => b !== userId)
                        }
                        : item
                )
            );
        } catch (error) {
            console.error("Error updating basket:", error);
        }
    };
    return (
        <Main>
            <Filter />

            {filteredItems.map((e, i) => (
                <MainDiv key={e._id}>
                    <ProductCard>
                        {e.basket?.includes(userId) ? (
                            <IconSpan1 onClick={() => addToBasket(e._id)}>
                                <IoMdHeart />
                            </IconSpan1>
                        ) : (
                            <IconSpan1 onClick={() => addToBasket(e._id)}>
                                <IoMdHeartEmpty />
                            </IconSpan1>
                        )}
                        <Img>
                            <img
                                src={`http://localhost:3001/uploads/${e.image}`}
                                alt={e.modelName}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Img>
                        <Name>{e.modelName}</Name>
                        <Price>{e.price} AMD</Price>
                    </ProductCard>
                </MainDiv>
            ))}

        </Main>
    );
};
