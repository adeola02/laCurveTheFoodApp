import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Home/Header/Header';
import Home from "../components/Home/Home"

const Buyers = () => {
    const isLoggedIn=useSelector((state)=>state.cart.loginIn.isLoggedIn)
  console.log(isLoggedIn)
    const {loginIn}=useSelector((state)=>state)
   console.log(loginIn)
  return (
    <>
    {
        isLoggedIn?<div className='Body'>
            {/* <Header/> */}
            <Outlet/>
        </div>:<Navigate to="/" replace={true}/>
    }
    </>
  )
}

export default Buyers 