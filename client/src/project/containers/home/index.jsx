import React, { useState, useEffect } from "react";
import { ItemsDiv } from "../items/items";
import { MyCarousel } from "../carusel/carusel";
import { Phones } from "../phones/phones";
import { Notebook } from "../notebooks/notebooks";
import { Watches } from "../watches/watches";
import productApi, { useFetchProducts } from "../../api/servicesApi";
import { IoSearch } from "react-icons/io5";
import { IconSpan1, Img, Main, MainDiv, Name, Price, ProductCard } from "../../../globalStyles";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import {Reviews} from "../../components/review/index";

export const MyHome = ({search}) => {
    const token = localStorage.getItem("token"); 
    const fetchedItems = useFetchProducts();
    const [items, setItems] = useState([]);
    const [user, setUser] = useState({});
    const userId = localStorage.getItem("userId");
    const filteredItems = items.filter((item) => true );
    useEffect(() => {
        const getData = async() => {
            const token = localStorage.getItem("token")
            if(!token) return
            const res = await productApi.profile(token)
            setUser(res.data)
        }
        getData()
    } , [])
    console.log(user);
    
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
    console.log(filteredItems);
    
    return (
        <>
            <MyCarousel />
            <ItemsDiv />
            <Main>
                {filteredItems.filter(name => name.modelName.toUpperCase().includes(search.toUpperCase())).map((e) => (
                    <MainDiv key={e._id}>
                        <ProductCard>
                            {user?.basket?.includes(e._id) ? (
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
                                    style={{ width: "100%" }}
                                />
                            </Img>
                            <Name>{e.modelName}</Name>
                            <Price>{e.price} AMD</Price>
                        </ProductCard>
                    </MainDiv>
                ))}
            </Main>

            {/* <Reviews token={token} isAdmin={false} /> */}



        </>
    );
};