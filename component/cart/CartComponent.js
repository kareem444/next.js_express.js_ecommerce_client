import React from "react";
import { useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import CartItemNoProduct from "./CartItemNoProduct";
import CartStatus from "./CartStatus";

function CartComponent({ styles, setShow, setCartProductModalQuantity }) {
    const cart = useSelector((state) => state.cart.cart);
    return (
        <div>
            {cart.productCount > 0 ? (
                <div>
                    <CartStatus
                        styles={styles}
                        totalQuantity={cart.productCount}
                        totalPrice={cart.totalPrice}
                    />
                    <CartDetails
                        styles={styles}
                        cartProducts={cart.cartProducts}
                        setShow={setShow}
                        setCartProductModalQuantity={setCartProductModalQuantity}
                    />
                </div>
            ) : (
                <CartItemNoProduct styles={styles} productCount={cart.productCount} />
            )}
        </div>
    );
}

export default CartComponent;
