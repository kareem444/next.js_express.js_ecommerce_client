import AxiosInstance from "../../../helper/AxiosInstance";
import { GET_PRODUCT } from "../type";

export const GetModalProductInfo = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`http://localhost:3001/product/${id}`)
                .then(res => {
                    dispatch({
                        type: GET_PRODUCT,
                        product: res.data.product
                    })
                })
                .catch(err => console.error(err));
        } catch (e) { }
    };
};