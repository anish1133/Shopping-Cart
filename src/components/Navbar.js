import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

 const Navbar = () =>{ 
    return(
        <div>
            <div className="flex flex-row justify-evenly">
               <NavLink to="/">
                    <div>
                        <img src="logo.png" width="148px" alt="not found" /> 
                    </div>
               </NavLink>
                <div>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <FaShoppingCart />
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Navbar;