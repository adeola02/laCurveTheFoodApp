import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import {buyersLogin} from "../../Global/Slice";
import { useDispatch, useSelector } from "react-redux";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
 const {loggedInRole}=useSelector((state)=>state.cart.loginIn)
 
 console.log(loggedInRole)
  const dispatch=useDispatch();
  const navigate=useNavigate();
 
  const userData=z.object({
    email:z.string({message:"invalid email"}),
    password:z.string()
  });

  const {register,handleSubmit,formState:{errors},setErrors}=useForm({
    resolver:zodResolver(userData)
  })
  const onSubmit=(data)=>{
    dispatch(buyersLogin(data))
    if(loggedInRole === "buyers"){
      navigate("/lami/buyer/home")

    }else{
      navigate("/lami/vendor/vendorpage")
    }
  }
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   dispatch(buyersLogin(userData))
  //   navigate("/lami/home/")
  //   // console.log(userData)
  // };
  return (
    <div className="form-wrapper">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="email"
         {...register("email")}
          required={true}
        />
        <input
          type="password"
          placeholder="password"
        {...register("password")}
        />
        {/* {errors.password && <span>{errors.password.message}</span>} */}
        <button type="submit">Log In</button>
        <p>
          Don't have an account.?{" "}
          <span style={{ color: "black" }}>
            <NavLink to={"/signup"} style={{ color: "red" }}>
              Sign Up
            </NavLink>{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
