import React from "react";
import ProductBody from "./ProductBody";
import ProductInfoCarousl from "./ProductInfoCarousl";

function ProductInfo({ styles, product }) {
    return (
        <div className={styles.product_info_container}>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <ProductInfoCarousl styles={styles} />
                </div>
                <div className="col-lg-6 col-12">
                    <ProductBody styles={styles} product={product} />
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
