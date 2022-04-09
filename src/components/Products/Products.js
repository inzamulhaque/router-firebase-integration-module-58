import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { auth } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h3>{user?.displayName}</h3>
        </div>
    );
};

export default Products;