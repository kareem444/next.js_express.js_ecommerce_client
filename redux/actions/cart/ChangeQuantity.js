import AxiosInstance from "../../../helper/AxiosInstance";

export const ChangeQuantity = (id, quantity) => {
    return async (dispatch) => {
        try {
            AxiosInstance.put(`cart/${id}`, {
                quantity,
            })
                .then((res) => {
                    console.log(res.data);
                })
                .catch(function (error) { });
        } catch (e) { }
    };
};
