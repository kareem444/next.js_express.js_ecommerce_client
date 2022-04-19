import React from "react";

function ModalBodyInfo({ product, styles }) {
    return (
        <div className={styles.cart_modal_body_info}>
            {product.image && (
                <img
                    src={`http://localhost:3001/images/products/${product.image}`}
                    alt={product.name}
                />
            )}
            <div>
                <h5 className="text-center mt-2">{product.name}</h5>
                <div className="d-flex justify-content-around my-3">
                    <div >
                        <span className="me-1">quantity:</span>
                        <span>{product.quantity}</span>
                    </div>
                    <div>
                        <span className="me-1">price:</span>
                        <span>${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalBodyInfo;
