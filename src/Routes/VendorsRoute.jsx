import React from 'react'
import { useSelector } from 'react-redux'
import Vendor from '../pages/VendorsPage/Vendor'

const VendorsRoute = () => {
    const {isLoggedIn}=useSelector((state)=>state.cart.loginIn)
    console.log(isLoggedIn)
  return isLoggedIn? (
    <div>
      <Vendor/>
    </div>
  ):null
}

export default VendorsRoute