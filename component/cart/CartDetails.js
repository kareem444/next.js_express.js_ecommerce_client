import React from "react";
import CartDetailsTableItem from "./CartDetailsTableItem";

function CartDetails({ styles, cartProducts , setShow , setCartProductModalQuantity}) {
    return (
        <div className={styles.cartDetails_container}>
            <table className="table">
                <thead className={styles.cartDetails_head}>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">total price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts &&
                        cartProducts.map((product) => (
                            <CartDetailsTableItem
                                styles={styles}
                                product={product}
                                key={product._id}
                                setShow={setShow}
                                setCartProductModalQuantity={setCartProductModalQuantity}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default CartDetails;
