import React, { useEffect, useState } from "react";
import "./Vendors.css";
import { NavLink, useParams } from "react-router-dom";
import data from "../../food.json";
import Header from "../Home/Header/Header";
const Vendors = () => {
  const datas = [
    {
      name: "delicious treat",
    },
    {
      name: "delicious treat",
    },
    {
      name: "delicious treat",
    },
    {
      name: "delicious treat",
    },
    {
      name: "delicious treat",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOKfmgz8RYR-77Q66B94aaIODtkWxS0cll3A1cVRkfPKPHc85Y2_55C9aqMBkQVdX7k8&usqp=CAU",
    },
    {
      name: "delicious treat",
    },
    {
      name: "delicious treat",
    },
    {
      name: "delicious treat",
    },
  ];

  const array = Object.values(data);
  const [vendors,setVendors]=useState();
  console.log(vendors)

  useEffect(()=>{
      
      const allVendors = array.map((e) => e.vendor);
      console.log(allVendors)
      const filteredVendor = allVendors.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
          acc.push(cur);
        }
        return acc;
      }, []);
      setVendors(filteredVendor)
  },[])

  
  

  return (
    <>
    <Header/>
    <div className="vendors-holder">
      <div className="vendors-wrapper">
        {vendors?.map((item, index) => (
          <div className="vendors-cards" key={index}>
            <div className="vendor-img">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqNNWx6mHXIVtL480D7Gd-bcSaufI5300nQ&s"
            alt=""
            id="img"
          />
            </div>
            <NavLink to={`/lami/buyer/menu/${item}`}>{item}</NavLink>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Vendors;
