import { createStore,combineReducers,applyMiddleware} from "redux";
import authReducer from "./Reducers/authReducer"; 
import productsReducer from "./Reducers/productsReducer";
import cartReducer from "./Reducers/cartReducer";
import { thunk } from "redux-thunk";
import loggerMiddleware from "./middlewares/loggerMiddleware";

const rootReducer=combineReducers({
     auth:authReducer,
     products:productsReducer,
     cart:cartReducer,
});
const store=createStore(
     rootReducer,
     applyMiddleware(loggerMiddleware,thunk)
);
export default store;