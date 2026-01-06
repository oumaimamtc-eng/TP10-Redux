import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({
     name:"counter",
     initialState:{compteur:0},
     reducers:{
          increment:(state,action)=>{
               state.compteur +=action.payload
          },
          decrement:(state,action)=>{
               state.compteur -=action.payload
          },
          initialiser:(state,action)=>{
               state.compteur =action.payload
          }
     }
})
export const {increment,decrement,initialiser}=CounterSlice.actions;
export default CounterSlice.reducer;