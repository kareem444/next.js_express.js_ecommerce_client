import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/actions/auth/LogOut";

export default function NavMenu() {
    const [ShowLogOutItem, setShowLogOutItem] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (auth.isAuth && token) {
            setShowLogOutItem(true)
        }else{
            setShowLogOutItem(false)
        }
    }, [auth.isAuth]);
    return (
        <DropdownButton title="" variant="dark">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            {ShowLogOutItem && (
                <Dropdown.Item eventKey="3" onClick={() => dispatch(LogOut())}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="ms-1">Log out</span>
                </Dropdown.Item>
            )}
        </DropdownButton>
    );
}
