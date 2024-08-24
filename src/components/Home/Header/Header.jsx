import React, { useState } from "react";
import "./Header.css";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Global/Slice";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqNNWx6mHXIVtL480D7Gd-bcSaufI5300nQ&s"
            alt=""
            id="img"
          />
        </div>
        <div className="menu">
          <nav>
            <NavLink to={"/lami/buyer/home"}> Home</NavLink>
          </nav>
          <nav>
            <NavLink to={"/lami/buyer/vendors"}>Vendors</NavLink>
          </nav>
          <nav>
            <NavLink to={"/lami/buyer/cart"}>Carts({cart.length})</NavLink>
          </nav>
          <nav >Help</nav>
        </div>
        <NavLink className="auth" onClick={() => dispatch(logout())}>
        <IoIosLogOut />
          logout
        </NavLink>
        
      </div>
    </header>
  );
};

export default Header;
