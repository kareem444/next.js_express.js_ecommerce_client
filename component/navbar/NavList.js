import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavAuthList from './NavAuthList';
import NavMenu from './NavMenu';
import Link from 'next/link'
import NavShoppingCartItem from './NavShoppingCartItem';

function NavList({ }) {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link active" aria-current="page">
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </a>
                </Link>
            </li>
            <NavShoppingCartItem />
            <NavAuthList />
            <li className="nav-item">
                <NavMenu />
            </li>
        </ul>
    );
}

export default NavList;