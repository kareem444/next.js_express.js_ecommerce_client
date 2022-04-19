import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

function CartItemNoProduct({ styles, productCount }) {
    const router = useRouter()
    useEffect(() => {
        if (productCount <= 0) {
            setTimeout(() => {
                router.push('/')
            }, 4000);
        }
    }, [productCount])
    return (
        <div className={styles.no_cart_product}>
            <h4>No Product In the Cart</h4>
        </div>
    );
}

export default CartItemNoProduct;