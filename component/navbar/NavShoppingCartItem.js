import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import Link from "next/link";
import { useRouter } from "next/router";

function NavShoppingCartItem({ }) {
    const [ActiveTheCart, setActiveTheCart] = useState(false);
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token && auth.isAuth) {
            setActiveTheCart(true);
        } else {
            setActiveTheCart(false);
        }
    }, [auth.isAuth]);
    const router = useRouter();
    return (
        <li className="nav-item">
            {ActiveTheCart ? (
                router.pathname === "/Cart" ? (
                    <a className="nav-link active" aria-current="page">
                        <Badge badgeContent={auth.userCartproductQuantity} color="error">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </Badge>
                    </a>
                ) : (
                    <Link href="/Cart">
                        <a className="nav-link active" aria-current="page">
                            <Badge badgeContent={auth.userCartproductQuantity} color="error">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                            </Badge>
                        </a>
                    </Link>
                )
            ) : (
                <a className="nav-link disabled" aria-current="page">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </a>
            )}
        </li>
    );
}

export default NavShoppingCartItem;
