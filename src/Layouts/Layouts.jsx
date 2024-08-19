import React from 'react'
import Home from '../components/Home/Home';
import "./Layouts.css"
import Header from '../components/Home/Header/Header';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <div className='layouts-body'>
      <div className='Body'>

      <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layouts