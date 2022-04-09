import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const RequireAuth = ({ children }) => {
    const { auth } = useFirebase();
    const [user] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to={"/signin"} state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;