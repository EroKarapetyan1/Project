import React, { useEffect, useState, useMemo } from "react";
import { IconSpan, MainDiv, Name, Price, ProductCard, Img, IconSpan1 } from "../../../globalStyles";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import productApi from "../../api/servicesApi";
import { Main } from "../../../globalStyles";

// export const CartPage = () => {
//     const [product, setProduct] = useState([])
//     const [active, setActive] = useState(false)
//     const navigate = useNavigate();

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const res = await productApi.GetLikedProduct();
//                 setProduct(res.data.data)
//             } catch (error) {

//             }
//         };
//         getData();
//     }, [active]);


//     console.log(product);

//     const addLike = async (id) => {
//         const res = await productApi.Likes(id)
//         console.log(res);
//         setActive(e => !e)
//     } 

//     return (

//         <Main >

//             {product.length > 1 && product.map((e) => (
//                 <MainDiv key={e._id}>
//                     <ProductCard key={e._id}>
//                         <IconSpan onClick={() => addLike(e._id)}>
//                             {e.like ? <IoMdHeart /> : <IoMdHeartEmpty />}
//                         </IconSpan>
//                         <img
//                             src={`http://localhost:3001/uploads/${e.image}`}
//                             alt={e.model}
//                             style={{ width: "100%"}}
//                         />
//                         <Name>{e.modelName}</Name>
//                         <Price> ֏ {e.price} </Price>
//                     </ProductCard>
//                 </MainDiv>
//             ))}


//         </Main>


//     );
// };



export const CartPage = () => {
    const [product, setProduct] = useState([])
    const [items, setItems] = useState([]);
    const [active, setActive] = useState(false);
    const userId = localStorage.getItem("userId");


    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const token = localStorage.getItem("token")
        if (!token) return
        const response = await productApi.GetLikedProduct(token)


        setProduct(response.data)
    }
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
            setActive(e => !e)
        } catch (error) {
            console.error("Error updating basket:", error);
        }
    };

    const clearBasket = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in");
            return;
        }

        try {
            await productApi.clearBasket(token);
            alert("Basket cleared successfully");
            setItems([]);
        } catch (error) {
            console.error("Error clearing basket:", error);
        }
        setActive(e => !e)

    };

    return (
        <>
            <hr /><hr /><hr /><hr />
            <button onClick={clearBasket} style={{ padding: "10px", background: "black", color: "white" }}>
                Clear Basket
            </button>

            <Main>
                {product.length > 0 && product.map(e => (
                    <MainDiv key={e._id}>
                        <ProductCard>
                            {e.basket?.includes(userId) ? (
                                <IconSpan1 onClick={() => addToBasket(e._id)}>
                                    <IoMdHeartEmpty />

                                </IconSpan1>
                            ) : (
                                <IconSpan1 onClick={() => addToBasket(e._id)}>
                                    <IoMdHeart />

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
        </>


    )
}