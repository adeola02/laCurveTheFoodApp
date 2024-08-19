import React, { useEffect, useState } from "react";
import "./Orders.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Orders = ({ orders,setShowOrders }) => {
  console.log(orders);
  // const [vendor, setVendor] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");
  console.log(paymentMethod)
  const vendorName=orders.map((e)=>e.vendor)
  console.log(vendorName)

  const vendor=vendorName.reduce((acc,cur)=>{
    if(!acc.includes(cur)){
      acc.push(cur)
    }
    return acc;
  },[])
console.log(vendor)
  useEffect(() => {
    Aos.init();
  }, []);

  const payment=()=>{
    if(paymentMethod === "pay with card"){
      alert("order")
    }else{
      alert ("hdj")
    }
  }

  return (
    <div className="checkout-body">
      <div className="checked-items">
        <div className="vendor-name"><p>{vendor}</p>

        <IoArrowBack cursor="pointer" onClick={()=>setShowOrders(false)}/>
        </div>
        {orders.map((item) => (
          <>
            <div className="cartse" key={item.id}>
              <div className="image-card"> 
                <img src={item.image} alt="" />
              </div>
              <div className="carts-desc">
                <p
                  style={{
                    paddingTop: "50px",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                 {item.dish}
                </p>
              </div>
              <div className="cart-menu">
                <nav>Quantity:{item.Qty}</nav>
              </div>
            </div>
          </>
        ))}
      </div>
      <footer>
        <select
          name=""
          id="select"
          onChange={(event) => setPaymentMethod(event.target.value)}
          value={paymentMethod}
        >
          <option value="">payment method</option>
          <option value="pay with card">pay with card</option>
          <option value="pay on delivery">pay on delivery</option>
        </select>
        <button>
          Make payment <IoMdArrowDropdown size={30} onClick={payment} />
        </button>
      </footer>
    </div>
  );
};

export default Orders;
