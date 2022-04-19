import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import ModalBody from "./ModalBody";

function ModalChangQuantity({
    setShow,
    show,
    styles,
    CartProductModalQuantity,
}) {
    const handleClose = () => setShow(false);
    const product = useSelector((state) => state.product.product);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            
            backdropClassName="h-100 w-100"
        >
            <Modal.Body className="p-0">
                {product ? (
                    <ModalBody
                        product={product}
                        styles={styles}
                        setShow={setShow}
                        CartProductModalQuantity={CartProductModalQuantity}
                    />
                ) : (
                    <div className="my-5 text-center text-black-50">
                        some thing wrong no product selected. !
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default ModalChangQuantity;
