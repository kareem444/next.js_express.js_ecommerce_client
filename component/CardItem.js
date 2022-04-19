import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@material-ui/lab";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/actions/AddToCart";
import Link from 'next/link'

function CardItem({ styles, product }) {
    const [value, setValue] = React.useState(2);
    const router = useRouter();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function handelAddToCart() {
        const token = sessionStorage.getItem("token");
        if (auth.isAuth && token) {
            dispatch(AddToCart(product , 1 , product.price));
        } else {
            router.push("/Signin")
        }
    }
    return (
        <Card style={{ width: "18rem" }} >
            <Card.Img
                variant="top"
                src={`http://localhost:3001/images/products/${product.image}`}
            />
            <Card.Body className={styles.card_item_body}>
                <Link href={`/Product/${product._id}`} >
                    <a className=" text-black text-decoration-none">
                        <Card.Title>{product.name}</Card.Title>
                        <Rating value={value} readOnly size="small" />
                        <Card.Text className={styles.card_item_discription}>
                            {product.description}
                        </Card.Text>
                    </a>
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                    {product.quantity > 0 ? (
                        <Button variant="primary" onClick={() => handelAddToCart()}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span className="ms-1">Add to cart</span>
                        </Button>
                    ) : (
                        <span className="text-danger">out of stock</span>
                    )}
                    <div className={styles.card_item_price_container}>
                        <span>$</span>
                        <span>{product.price}</span>
                        <span>47</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
