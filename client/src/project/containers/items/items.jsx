import React, { useState, useEffect } from "react";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { BsGpuCard } from "react-icons/bs";
import { PiComputerTowerBold } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
import { Items, ItemsContainer, StyledLink } from "./styledItems";

export const ItemsDiv = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <>

            <ItemsContainer>
                <Items>
                    <StyledLink to="/phones">
                        <MdOutlineSmartphone />
                        <p>Հեռախոսներ</p>
                    </StyledLink>
                </Items>
                <Items>
                    <StyledLink to="/notebooks">
                        <FaLaptop />
                        <p>Նոութբուք</p>
                    </StyledLink>
                </Items>
                <Items>
                    <StyledLink to="/Watches">
                        <BsSmartwatch />
                        <p>Ժամացույցներ</p>
                    </StyledLink>
                </Items>
                <Items>
                    <StyledLink to="/gpu">
                        <BsGpuCard />
                        <p>Տեսա քարտ</p>
                    </StyledLink>
                </Items>
                <Items>
                    <StyledLink to="/pc">
                        <PiComputerTowerBold />
                        <p>համակարգիչներ</p>
                    </StyledLink>
                </Items>
                <Items>
                    <StyledLink to="/accessories">
                        <FaHeadphones />
                        <p>Աքսեսուարներ</p>
                    </StyledLink>
                </Items>
            </ItemsContainer>
        </>
    );
};
