import AxiosInstance from "../../../helper/AxiosInstance";
import { HIDE_FROM_CART } from "../type";

export const RemoveItemFromCart = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .delete(`cart/${id}`)
                .then(res => {
                    dispatch({
                        type : HIDE_FROM_CART
                    })
                })
                .catch(err => console.error(err));
        } catch (e) { }
    };
};