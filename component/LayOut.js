import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../redux/actions/auth/User';
import Navbar from './navbar/Navbar';


function LayOut({ children }) {
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (token && token !== null) {
            if (router.pathname !== '/Signup' && router.pathname !== '/Signin') {
                dispatch(User())
            }
        }
    },[router])
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default LayOut;