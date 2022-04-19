import React, { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import CartComponent from "../component/cart/CartComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../redux/actions/cart/getCarts";
import ModalChangQuantity from "../component/cart/modal/ModalChangQuantity";

function Cart({ }) {
    const [show, setShow] = useState(false);
    const [CartProductModalQuantity, setCartProductModalQuantity] = useState(1);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCarts());
    }, []);
    return (
        <div className={styles.container}>
            <CartComponent
                cart={cart}
                styles={styles}
                setShow={setShow}
                setCartProductModalQuantity={setCartProductModalQuantity}
            />
            <ModalChangQuantity
                setShow={setShow}
                show={show}
                styles={styles}
                CartProductModalQuantity={CartProductModalQuantity}
                setCartProductModalQuantity={setCartProductModalQuantity}
            />
        </div>
    );
}

export default Cart;
