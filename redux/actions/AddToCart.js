import AxiosInstance from "../../helper/AxiosInstance";

export const AddToCart = (product, quantity, totalPrice) => {
    return async dispatch => {
        try {
            AxiosInstance
                .post("user/cart", {
                    product: {
                        _id: product._id,
                        name: product.name,
                        image: product.image,
                        totalPrice: totalPrice,
                        quantity: quantity,
                        price: product.price
                    }
                })
                .then(res => console.log(res.data))
                .catch(err => console.error(err));
        } catch (e) { }
    };
};