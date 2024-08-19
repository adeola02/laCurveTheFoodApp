import React, { useState } from "react";
import "./Carts.css";
import CartCards from "./CartCards";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Global/Slice";
import Orders from "../Orders/Orders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoArrowBack } from "react-icons/io5";

const Carts = () => {
    const {cart}=useSelector((state)=>state.cart);
    const [showOrders,setShowOrders]=useState(false);
    const dispatch=useDispatch();
    const [vendors,setVendors]=useState("");
    console.log(vendors)
    // console.log(cart)
    const orders=cart.filter((item)=>item.vendor === vendors)
    // console.log(orders)
    const checkVendors=cart.map((e)=>e.vendor)
    // console.log(checkVendors)

    const checkout=()=>{
      if(vendors === ""){
        toast.error("who are you checking out for.?")
      }
      else if(!checkVendors.includes(vendors)){
     toast.error("not here")
      }
      else{
        setShowOrders(true)
      }
    }
    const totalOrders=cart.reduce((acc,cur)=>acc+cur.Qty,0)
console.log(totalOrders)
    
  return (
    <div className="carts">
      <div className="carts-wrapper">
        <div className="carts-menu">
            <p>Total Orders:{totalOrders}</p>
            <button onClick={()=>dispatch(clearCart())}>clear orders</button>
            <button onClick={checkout}>Checkout</button>
            {
              showOrders?<Orders orders={orders} setShowOrders={setShowOrders}/>:null
            }
            <select name="" id="" value={vendors} onChange={(event)=>setVendors(event.target.value)}>
              <option value="">checkout for.?</option>
              <option value="iya rice">iya rice</option>
              <option value="delicious treat">delicious treat</option>
              <option value="iya b&b">iya b&b</option>
              <option value="iya fries">iya fries</option>
              <option value="mama calabar">mama calabar</option>
            </select>
        </div>
        <div className="cartcards">
            {
                cart.map((e)=>(
                    <CartCards e={e} key={e.id}/>
                ))
            }
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Carts;
