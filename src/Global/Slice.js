import { createSlice } from "@reduxjs/toolkit";

export const Slice=createSlice({
    name:"foodApp",
    initialState:{
        cart:[],
        users:{
            vendors:[],
            buyers:[],
        },
        loginIn:{
            loggedInRole:"",
            isLoggedIn:false,
            loggedInUser:{}
        }
    },
    reducers:{
        signUp:(state,{payload})=>{
            if(payload.role === "vendors"){
                state.users.vendors.push(payload)
            }else{
                state.users.buyers.push(payload)
            }
        },
        vendorsLogin:(state,{payload})=>{
            const checkVendor=state.users.vendors.findIndex((e)=>e.email === payload.email);
            if(checkVendor !== -1){
                if(state.users.vendors[checkVendor].password === payload.password){
                    alert ("incorrect password")
                }else{
                    state.loginIn.isLoggedIn=true;
                    state.loginIn.loggedInUser=payload;
                }
            } else{
                alert ("user not found")
            }
        },
        buyersLogin:(state,{payload})=>{
            const checkBuyers=state.users.buyers.findIndex((state)=>state.email === payload.email)            
            if(checkBuyers !== -1){
                if(state.users.buyers[checkBuyers].password === payload.password){
                    state.loginIn.isLoggedIn=true;
                    state.loginIn.loggedInUser=payload;
                    state.loginIn.loggedInRole="buyers"
                }else{
                    alert("incorrect password")
                }
            }
            const checkVendors=state.users.vendors.findIndex((e)=>e.email === payload.email);
            if( checkVendors !== -1){
                if(state.users.vendors[checkVendors].password === payload.password){
                    state.loginIn.loggedInRole="vendor";
                    state.loginIn.isLoggedIn=true;
                    state.loginIn.loggedInUser=payload;
                }else{
                    alert("incorrect password")
                }
            }else{
                alert("user not found")
            }
          
        },
        pushOrder: (state, {payload})=>{
       const check=state.cart.findIndex((e)=>e.id === payload.id)
       if(check >= 0){
        state.cart[check].Qty +=1
       }else{
        const addTo={
            ...payload,Qty:1
        }
        state.cart.push(addTo)
       }
        },
        clearCart:(state,{payload})=>{
            state.cart=payload=[]
        },
        logout:(state)=>{
            state.loginIn.isLoggedIn=false;
            state.loginIn.loggedInUser={}
            console.log("logout");   
        },
        increaseOrders:(state,{payload})=>{
            const orders=state.cart.map((item)=>{
                if(item.id === payload.id){
                    return item.Qty += 1
                }
            })
        },
        decreaseOrders:(state,{payload})=>{
            const orders=state.cart.map((item)=>{
                if(item.id === payload.id){
                    return item.Qty -= 1
                }
            })
        }
    }
})

export const {signUp,vendorsLogin,buyersLogin,pushOrder,clearCart,logout,increaseOrders,decreaseOrders}=Slice.actions;

export default Slice.reducer;