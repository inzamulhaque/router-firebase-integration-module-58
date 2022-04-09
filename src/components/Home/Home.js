import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFirebase from '../../hooks/useFirebase';
import "./Home.css";

const Home = () => {
    const { auth } = useFirebase();
    const [user] = useAuthState(auth);

    return (
        <div>
            <h3>This Is Home</h3>
            <h5>{user?.displayName}</h5>
        </div>
    );
};

export default Home;