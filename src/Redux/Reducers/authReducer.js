import { REGISTER,LOGIN,LOGOUT } from "../Actions/authActions";

const initialAuthen={ 
isAuthenticated: false, 
user: null, 
users: [
     {
         username: "oui",
         password: "123" 
     }
], 
};

export default function authReducer(state=initialAuthen,action){
     switch (action.type){
          case REGISTER:
               return {
                    ...state,
                    users:[...state.users,action.payload],
               };
          case LOGIN:
               return {
                    ...state,
                    isAuthenticated:true,
                    user:action.payload,
               };
          case LOGOUT:
               return { ...state,isAuthenticated: false, user: null };
          default:
               return state;
     }
}