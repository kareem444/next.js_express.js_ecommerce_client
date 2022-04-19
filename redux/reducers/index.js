import { combineReducers } from "redux";
import Auth from "./Auth";
import HandelErrors from "./HandelErrors";
import Cart from "./Cart";
import Product from "./Product";

export default combineReducers({
    auth: Auth,
    error: HandelErrors,
    cart: Cart,
    product : Product
})