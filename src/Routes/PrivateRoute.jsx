import React from 'react';
import { useSelector } from 'react-redux';
import Buyers from './Buyers';
import VendorsRoute from './VendorsRoute';

const PrivateRoute = () => {
    const {isLoggedIn,loggedInRole}=useSelector((state)=>state.cart.loginIn)
    console.log(isLoggedIn,loggedInRole)
  return (
    <div>
      {
        loggedInRole === "buyers" ? <Buyers/>: loggedInRole === "vendor"?<VendorsRoute/>:null
      }
    </div>
  )
}

export default PrivateRoute