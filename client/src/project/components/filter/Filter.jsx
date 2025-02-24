import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FilterBar, FilterIcon } from "./styledFilter";
import { Items, ItemsContainer, StyledLink } from "../MenuBar/styledMenubar";
import { useEffect } from "react";
import M from "materialize-css";
import { useLocation } from "react-router-dom";
export const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const loc = useLocation()
    const OpenFun = () => setIsOpen(true);
    const CloseFun = () => setIsOpen(false);


    useEffect(() => {
        M.FormSelect.init(document.querySelectorAll("select"));
    });
    return (
        <>
            <style>
                {`
          .select-wrapper input.select-dropdown {
            color: #939393 !important;
          }
        `}
            </style>
            {loc.pathname !== "/" && <FilterIcon>
                <span>

                    <FaFilter onClick={OpenFun} />
                </span>
            </FilterIcon>}

            <FilterBar $isOpen={isOpen}>
                <IoIosCloseCircle

                    onClick={CloseFun}
                    style={{
                        fontSize: '35px',
                        cursor: 'pointer',
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        color: "black",
                    }}
                />
            
            </FilterBar>
        </>
    );
};
