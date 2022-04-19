import { LOG_OUT_USER, SET_AUTH_INFORMATION } from "../actions/type";

const INITIAL_STATE = {
    isAuth: false,
    AuthInfo: null,
    userCartproductQuantity: 0,
};

const Auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTH_INFORMATION:
            return {
                ...state,
                isAuth: true,
                AuthInfo: action.data,
                userCartproductQuantity: action.userCartproductQuantity,
            };
        case LOG_OUT_USER:
            return {
                ...state,
                isAuth: false,
                AuthInfo: null,
                userCartproductQuantity: 0,
            };
        default:
            return state;
    }
};

export default Auth;
