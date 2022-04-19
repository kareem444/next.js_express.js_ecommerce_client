import { GET_PRODUCT } from "../actions/type";

const INITIAL_STATE = {
    product: {}
};

const Product = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return { ...state, product: action.product }
        default:
            return state
    }
}

export default Product