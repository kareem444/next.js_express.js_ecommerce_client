import { LOG_OUT_USER } from "../type";

export const LogOut = () => {
    return async dispatch => {
        try {
            dispatch({ type: LOG_OUT_USER })
            sessionStorage.removeItem("token")
        } catch (e) { }
    };
};