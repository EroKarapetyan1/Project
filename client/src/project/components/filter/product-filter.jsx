import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Img, MainDiv, Main, Price, ProductCard, IconSpan1, IconSpan } from "../../../globalStyles";
import { Name } from "../Profile/profileStyle";
import { FaCartPlus } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { InputWrapper } from "../header/header";
import { IoSearch } from "react-icons/io5";


export const ProductFilter = () => {
    const handleSearchClick = () => {
        // setIsActive((e) => !e);
        // if (inputRef.current) {
        //   inputRef.current.focus();
        // }
        const newArr = product.filter(el => el.modelName.toLowerCase().includes(el.target.value.toLowerCase()))
        setFiltres(newArr)
      };
    return (
        <>
         <IconSpan>
          {/* <IoSearch onClick={handleSearchClick} style={{ cursor: "pointer", }} /> */}

        </IconSpan>
            <InputWrapper>

                <input type="text" onChange={handleSearchClick}/>

            </InputWrapper>

        </>
    )
}