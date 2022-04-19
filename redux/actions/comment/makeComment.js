import AxiosInstance from "../../../helper/AxiosInstance";
import { CREATE_FIRST_COMMENT, CREATE_NEW_COMMENT } from "../type";

export const MakeComment = (data, product_id, auth) => {
    return async (dispatch) => {
        try {
            AxiosInstance.post(`comment/${product_id}`, {
                comment: data.comment,
            })
                .then((res) => { })
                .catch((err) => console.error(err));
        } catch (e) { }
    };
};
