import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { RiAppsLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { pushOrder } from '../../Global/Slice';
const MenuCards = ({item}) => {
const dispatch=useDispatch();

  return (
    <div className='menu-cards'>
        <div className='menu-option'>
            <nav>
        <RiAppsLine/>
            </nav>
            <nav>
                <FaShoppingBag onClick={()=>dispatch(pushOrder(item))}/>
            </nav>
        </div>
        <div className='food-img'>
            <img src={item.image} alt="sss" />
        </div>
        <aside>
            <h3>{item.dish}</h3>
            <span>
                ₦{item.price}
            </span>
        </aside>
    </div>
  )
}

export default MenuCards