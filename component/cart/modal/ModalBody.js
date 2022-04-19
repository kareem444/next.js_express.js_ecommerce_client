import React from "react";
import ModalBodyButton from "./ModalBodyButton";
import ModalBodyInfo from "./ModalBodyInfo";

function ModalBody({ product, styles, setShow, CartProductModalQuantity }) {
    return (
        <div>
            <ModalBodyInfo product={product} styles={styles} />
            <ModalBodyButton
                product={product}
                styles={styles}
                setShow={setShow}
                CartProductModalQuantity={CartProductModalQuantity}
            />
        </div>
    );
}

export default ModalBody;
