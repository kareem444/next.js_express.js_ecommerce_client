import React from "react";

function CartStatus({ styles, totalQuantity, totalPrice }) {
    return (
        <div className={styles.CartStatus_container}>
            <div className="row justify-content-around">
                <div className="col-md-4 col-5 rounded shadow mt-5 p-0">
                    <h5 className="text-center mb-0">Total quantity</h5>
                    <div className="text-center p-4">
                        <span>{totalQuantity}</span>
                    </div>
                </div>
                <div className="col-md-4 col-5 rounded shadow mt-5 p-0">
                    <h5 className="text-center mb-0">Total price</h5>
                    <div className="text-center p-4">
                        <span>$</span>
                        <span>{totalPrice}</span>
                        <span>64</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartStatus;
