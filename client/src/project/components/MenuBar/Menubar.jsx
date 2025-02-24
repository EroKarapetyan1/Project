// import React, { useState } from "react";
// import { Menubar, OpenIcon, ItemsContainer, Items, StyledLink } from "./styledMenubar";
// import { IoIosCloseCircle } from "react-icons/io";
// import { RiMenu4Fill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// export const MenuBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const OpenFun = () => setIsOpen(true);

//   const CloseFun = () => setIsOpen(false);

//   return (
//     <>
//       <OpenIcon>
//         <RiMenu4Fill onClick={OpenFun} style={{ cursor: "pointer" }} />
//       </OpenIcon>

//       <Menubar $isOpen={isOpen}>
//         <IoIosCloseCircle
//           onClick={CloseFun}
//           style={{
//             fontSize: '35px',
//             cursor: 'pointer',
//             position: 'absolute',
//             top: '20px',
//             right: '20px',
//             color: "black",
            
          
//           }}
//         />

//         <ItemsContainer>
//           <Items><StyledLink to="/phones"><p>Հեռախոսներ</p></StyledLink></Items>
//           <Items><StyledLink to="/notebooks"><p>Նոութբուք</p></StyledLink></Items>
//           <Items><StyledLink to="/watches"><p>Ժամացույցներ</p></StyledLink></Items>
//           <Items><StyledLink to="/gpu"><p>Տեսա քարտ</p></StyledLink></Items>
//           <Items><StyledLink to="/pc"><p>Համակարգիչներ</p></StyledLink></Items>
//           <Items><StyledLink to="/accessories"><p>Աքսեսուարներ</p></StyledLink></Items>
//         </ItemsContainer>
//       </Menubar>
//     </>
//   );
// };
