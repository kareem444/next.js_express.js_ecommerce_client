import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Buyproduct from "./Buyproduct";
import ProductRating from "./ProductRating";

function ProductBody({ styles, product }) {
    return (
        <div className={styles.product_body_container}>
            <h1>{product.name}</h1>
            <div className="d-flex mb-4 mt-3">
                <ProductRating />
                <span className="ms-2">(4.5)</span>
            </div>
            <p> {product.description}</p>
            <div className="d-flex">
                <div className="d-flex me-5">
                    <p>quantity :</p>
                    <span className="ms-2">{product.quantity}</span>
                </div>
                <div className="d-flex">
                    <p>price :</p>
                    <span className="ms-2">${product.price}</span>
                </div>
            </div>
            {product.quantity > 0 ? (
                <Buyproduct
                    styles={styles}
                    quantity={product.quantity}
                    product={product}
                />
            ) : (
                <span className="text-danger">
                    {" "}
                    <FontAwesomeIcon icon={faExclamationCircle} /> out of stock
                </span>
            )}
        </div>
    );
}

export default ProductBody;
