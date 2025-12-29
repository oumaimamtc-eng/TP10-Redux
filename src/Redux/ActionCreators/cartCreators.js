import { ADD_CART } from "../Actions/cartActions";

export const addCart=(c)=>({
     type:ADD_CART,
     payload:c,
});