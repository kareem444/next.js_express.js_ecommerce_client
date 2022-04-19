import axios from "axios";
import { ERROR_SIGNUP, SET_AUTH_INFORMATION } from "../type";

export const SignUp = (data) => {
    return async (dispatch) => {
        try {
            axios
                .post("http://localhost:3001/user/signup", {
                    data,
                })
                .then((res) => {
                    sessionStorage.setItem("token", res.data.token)
                    dispatch({
                        type: SET_AUTH_INFORMATION,
                        data: res.data.user
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: ERROR_SIGNUP,
                        message: err.response.data.message
                    })
                });
        } catch (e) { }
    };
};
