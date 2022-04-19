import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../redux/actions/AddToCart";

function Buyproduct({ styles, quantity, product }) {
    const [TheQuantity, setTheQuantity] = useState(1);
    const [TotalPrice, setTotalPrice] = useState(1);
    const auth = useSelector((state) => state.auth.isAuth);
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        setTotalPrice(TheQuantity * product.price);
    }, [TheQuantity])
    function handelAddTocart() {
        const token = sessionStorage.getItem("token");
        if (token && auth) {
            dispatch(AddToCart(product, TheQuantity, TotalPrice));
        } else {
            router.push("/Signin");
        }
    }
    return (
        <div className={styles.buy_prodect_button_container}>
            <div className="d-flex align-items-center justify-content-center ">
                <button
                    disabled={TheQuantity <= 1 ? true : false}
                    onClick={() => {
                        setTheQuantity(TheQuantity - 1);
                    }}
                    className={TheQuantity <= 1 ? "bg-secondary" : ""}
                >
                    -
                </button>
                <span>{TheQuantity}</span>
                <button
                    disabled={TheQuantity >= quantity ? true : false}
                    onClick={() => {
                        setTheQuantity(TheQuantity + 1);
                    }}
                    className={TheQuantity >= quantity ? "bg-secondary" : ""}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => {
                    handelAddTocart();
                }}
            >
                <span className="me-1">
                    <FontAwesomeIcon icon={faCartPlus} />
                </span>
                <span>Add To cart</span>
            </button>
        </div>
    );
}

export default Buyproduct;
