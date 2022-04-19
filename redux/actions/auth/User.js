import AxiosInstance from "../../../helper/AxiosInstance";
import { SET_AUTH_INFORMATION } from "../type";

export const User = () => {
    return async (dispatch) => {
        try {
            AxiosInstance.get("/user")
                .then((res) => {
                    dispatch({
                        type: SET_AUTH_INFORMATION,
                        data: res.data.user,
                        userCartproductQuantity: res.data.userCartproductQuantity,
                    });
                })
                .catch((err) => console.error(err));
        } catch (e) { }
    };
};
