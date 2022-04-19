import React from "react";
import ProductComments from "./produc comments/ProductComments";
import ProductInfo from "./product info/ProductInfo";

function ProductComponent({ styles, product, comments }) {
    return (
        <div className={styles.product_container}>
            <ProductInfo styles={styles} product={product} />
            <ProductComments
                styles={styles}
                product_id={product._id}
                comments={comments}
            />
        </div>
    );
}

export default ProductComponent;
