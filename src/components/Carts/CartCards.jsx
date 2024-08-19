import React from "react";
import { useDispatch } from "react-redux";
import { increaseOrders,decreaseOrders } from "../../Global/Slice";

const CartCards = ({e}) => {
const dispatch=useDispatch();
  return (
    <div className="cartse">
      <div className="image-card">
        <img src={e.image} alt="" />
      </div>
      <div className="carts-desc">
        <p>{e.dish}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          similique excepturi id maiores expedita, beatae harum illum impedit
          vel, ipsum exercitationem natus quos! Natus error temporibus dolore
          minima aspernatur ratione.
        </p>
        <h2>₦{e.price}</h2>
      </div>
      <div className="cart-menu">
        <button onClick={()=>dispatch(decreaseOrders(e))}>-</button>
        <p style={{color:"white"}}>
        {e.Qty}

        </p>
        <button onClick={()=>dispatch(increaseOrders(e))}>+</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default CartCards;
