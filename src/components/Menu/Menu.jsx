import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuCards from "./MenuCards";
import { useParams } from "react-router-dom";
import data from "../../food.json";
import Header from "../Home/Header/Header";

const Menu = () => {
  const { vendorId } = useParams();

  const [menuArray, setMenuArray] = useState([]);

  const array = Object.values(data);

  useEffect(() => {
    const foods = array.filter((e) => e.vendor === vendorId);
    setMenuArray(foods);
  }, []);
  // console.log(array.map((e)=>e.id))

  return (
    <>
    <Header/>
    <div className="menu-holder">
      <div className="menu-wrapper">
        {menuArray.map((item) => (
          <MenuCards key={item.id} item={item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Menu;
