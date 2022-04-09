import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Header.css";

const Header = () => {
    const { auth, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                {user && <NavLink to="/orders">Orders</NavLink>}
                <NavLink to="/signup">Sign Up</NavLink>
                <span>{user?.displayName && user?.displayName} </span>
                {
                    user?.uid ? <button onClick={handleSignOut}>Sign Out</button> :
                        <NavLink to="/signin">Sign In</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;