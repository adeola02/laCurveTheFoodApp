import React, { useState } from 'react';
import "./SignUp.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../Global/Slice';
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    // const [userData,setUserData]=useState({});
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const User=z.object({
        email:z.string({message:"must be a valid email"}),
        role:z.string(),
        name:z.string(),
        password:z.string({message:"must be a string"}).min(5,{message:"must be more than 5 characters "}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{message:"must contain number and specail characters"}
    )
    });

    const {register,handleSubmit,formState:{errors}, setErrors}=useForm({
        resolver: zodResolver(User)
    });
    const onSubmit=(data)=>{
        console.log("data",data)
        dispatch(signUp(data));
        navigate("/")
    }

    // console.log(userData)

    // const handleSign=(event)=>{
    //     event.preventDefault();
    //     dispatch(signUp(userData))
    //     navigate("/")
    // }
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up</h2>
            <input type="text" placeholder='username' required={true} {...register ("name")}/>
            <input type="email"  placeholder='email' {...register ("email")}/>
            {
                errors.email && <span style={{color:"red",background:"white"}}>{errors.email.message}</span>
            }
            <select {...register ("role")}>
                <option value="">--Vendor/Buyer--</option>
                <option value="vendors">Vendor</option>
                <option value="buyer">Buyer</option>
            </select>
            <input type="password" placeholder='password' {...register ("password")}/>
            {
                errors.password && <span style={{color:"red",background:"white"}}>{errors.password.message}</span>
            }
            <button type='submit='>Sign Up</button>
            <p>Already have an account.? <span><NavLink to={"/"} style={{color:"red"}}>Login</NavLink></span></p>
        </form>
    </div>
  )
}

export default SignUp