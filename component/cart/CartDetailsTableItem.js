import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { RemoveItemFromCart } from '../../redux/actions/cart/RemoveItemFromCart'
import { GetModalProductInfo } from "../../redux/actions/cart/GetModalProductInfo";

function CartDetailsTableItem({ styles, product ,setShow , setCartProductModalQuantity}) {
    const [HideFromCart, setHideFromCart] = useState(false)
    const dispatch = useDispatch()
    const myLoader = ({ src, width, quality }) => {
        return `http://localhost:3001/images/products/${src}?w=${width}&q=${quality || 75
            }`;
    };
    return (
        <tr className={HideFromCart ? "d-none" : styles.cartDetails_item}>
            <td>
                <Link href={`/Product/${product._id}`}>
                    <a className=" text-black text-decoration-none">
                        <div className="d-flex">
                            <div className="d-flex">
                                <Image
                                    src={product.product.image}
                                    width={90}
                                    height={72}
                                    loader={myLoader}
                                />
                            </div>
                            <span className="ms-1">{product.product.name} </span>
                        </div>
                    </a>
                </Link>
            </td>
            <td>
                <span className="ms-1">${product.product.price}.46</span>
            </td>
            <td>
                <span className="ms-1">{product.quantity}</span>
            </td>
            <td>
                <span className="ms-1">${product.totalProductPrice}.54</span>
            </td>
            <td>
                <div>
                    <button onClick={()=>{
                        dispatch(GetModalProductInfo(product._id))
                        setCartProductModalQuantity(product)
                        setShow(true)
                    }}>Change</button>
                    <button onClick={() => {
                        dispatch(RemoveItemFromCart(product._id))
                        setHideFromCart(true)
                    }}>Delete</button>
                </div>
            </td>
        </tr>
    );
}

export default CartDetailsTableItem;
