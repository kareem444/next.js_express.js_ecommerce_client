import { GET_CART, HIDE_FROM_CART } from "../actions/type";

const INITIAL_STATE = {
    cart: {},
    hidFromCart: false
};

const Cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CART:
            return { ...state, cart: action.cart }
        case HIDE_FROM_CART:
            return { ...state, hidFromCart: true }
        default:
            return state
    }
}

export default Cart