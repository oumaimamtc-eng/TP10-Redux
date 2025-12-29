import { REGISTER,LOGIN,LOGOUT } from "../Actions/authActions";

export const register=(user)=>({
     type:REGISTER,
     payload:user,
});
export const login=(user)=>({
     type:LOGIN,
     payload:user,
});
export const logout=(user)=>({
     type:LOGOUT,
     payload:user,
});