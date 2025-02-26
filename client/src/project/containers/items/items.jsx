import React, { useState, useEffect, useRef } from "react";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { BsGpuCard } from "react-icons/bs";
import { PiComputerTowerBold } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
import { Items, ItemsContainer, StyledLink } from "./styledItems";
import { Link } from "react-router-dom";

export const ItemsDiv = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    

    return (
        <>

            <ItemsContainer>
                <StyledLink to="/phones">

                    <Items >

                        <MdOutlineSmartphone />
                        <p>Հեռախոսներ</p>

                    </Items>
                </StyledLink>


                <StyledLink to="/notebooks">
                    <Items>
                        <FaLaptop />
                        <p>Նոութբուք</p>
                    </Items>
                </StyledLink>
                <StyledLink to="/Watches">

                    <Items>
                        <BsSmartwatch />
                        <p>Ժամացույցներ</p>
                    </Items>
                </StyledLink>
                <StyledLink to="/gpu">

                    <Items>
                        <BsGpuCard />
                        <p>Տեսա քարտ</p>
                    </Items>
                </StyledLink>
                <StyledLink to="/pc">

                    <Items>
                        <PiComputerTowerBold />
                        <p>համակարգիչներ</p>
                    </Items>
                </StyledLink>
                <StyledLink to="/accessories">

                    <Items>
                        <FaHeadphones />
                        <p>Աքսեսուարներ</p>
                    </Items>
                </StyledLink>

            </ItemsContainer>
        </>
    );
};
