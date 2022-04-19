import { ERROR_SIGNIN, ERROR_SIGNUP } from "../actions/type";

const INITIAL_STATE = {
    signupError: null,
    signinError:null
};

const HandelErrors = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR_SIGNUP:
            return { ...state, signupError: action.message }
        case ERROR_SIGNIN:
            return { ...state, signinError: action.message }
        default:
            return state
    }
}

export default HandelErrors