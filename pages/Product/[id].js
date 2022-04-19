import axios from "axios";
import React from "react";
import ProductComponent from "../../component/product/ProductComponent";
import styles from "../../styles/Product.module.css";

function Product({ product }) {
    return (
        <div className={styles.container}>
            <ProductComponent
                styles={styles}
                product={product.product}
                comments={product.comments}
            />
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const product = await axios.get(`http://localhost:3001/product/${id}`);

    return {
        props: { product: product.data },
    };
}

export default Product;
