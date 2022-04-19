import AxiosInstance from "../../../helper/AxiosInstance";
import { GET_CART } from "../type";

export const getCarts = () => {
    return async dispatch => {
        try {
            AxiosInstance
                .get("/cart")
                .then(res => {
                    dispatch({
                        type: GET_CART,
                        cart: res.data.cart
                    })
                })
                .catch(err => console.error(err));
        } catch (e) { }
    };
};