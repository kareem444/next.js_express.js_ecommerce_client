import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function NavAuthList({ }) {
    const router = useRouter();

    const [ShowLogNav, setShowLogNav] = useState(false);
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (router.pathname === "/Signup" || router.pathname === "/Signin") {
            setShowLogNav(false);
        } else {
            setShowLogNav(true);
        }
    }, [router.pathname]);
    return (
        <li className="nav-item">
            {auth.AuthInfo !== null
                ? ShowLogNav && (
                    <a className="nav-link active d-flex " aria-current="page" href="#">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        <span className="ms-1 fa-sm d-none d-sm-block">{auth.AuthInfo.name}</span>
                    </a>
                )
                : ShowLogNav && (
                    <Link href="/Signin">
                        <a className="nav-link active">
                            <FontAwesomeIcon icon={faSignInAlt} />
                            <span className="ms-2">SignIn/Up</span>
                        </a>
                    </Link>
                )}
        </li>
    );
}

export default NavAuthList;
