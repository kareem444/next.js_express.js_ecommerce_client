import axios from "axios";
import { ERROR_SIGNIN, SET_AUTH_INFORMATION } from "../type";

export const LogIn = (data) => {
    return async (dispatch) => {
        try {
            axios
                .post("http://localhost:3001/user/signin", {
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
                        type: ERROR_SIGNIN,
                        message: err.response.data.message
                    })
                });
        } catch (e) { }
    };
};
