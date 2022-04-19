import React from 'react';
import NavList from './NavList';

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand">Shopy</a>
                <NavList />
            </div>
        </nav>
    );
}

export default Navbar;