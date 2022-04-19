import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeQuantity } from "../../../redux/actions/cart/ChangeQuantity";

function ModalBodyButton({
    product,
    styles,
    setShow,
    CartProductModalQuantity,
}) {
    const [QuantitiyMount, setQuantitiyMount] = useState(1);

    useEffect(() => {
        setQuantitiyMount(CartProductModalQuantity.quantity);
    }, [CartProductModalQuantity]);

    const dispatch = useDispatch(); 
    return (
        <div className={styles.moda_change_button_container}>
            <div>
                <span>Total Price : </span>
                <span className="ms-2 fw-bold">${product.price * QuantitiyMount}</span>
            </div>
            <div>
                <button
                    onClick={() => {
                        setQuantitiyMount(QuantitiyMount - 1);
                    }}
                    disabled={QuantitiyMount <= 1 ? true : false}
                    className={QuantitiyMount <= 1 ? "bg-secondary" : ""}
                >
                    -
                </button>
                <p>{QuantitiyMount}</p>
                <button
                    onClick={() => {
                        setQuantitiyMount(QuantitiyMount + 1);
                    }}
                    disabled={QuantitiyMount > product.quantity ? true : false}
                    className={QuantitiyMount > product.quantity ? "bg-secondary" : ""}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => {
                    dispatch(
                        ChangeQuantity(CartProductModalQuantity._id, QuantitiyMount)
                    );
                    setShow(false);
                }}
            >
                <FontAwesomeIcon icon={faCartPlus} /> Add to cart
            </button>
        </div>
    );
}

export default ModalBodyButton;
