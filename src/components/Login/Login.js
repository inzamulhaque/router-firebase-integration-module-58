import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || "/";

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(() => navigate(from, { replace: true }))
    }

    const { auth } = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    return (
        <div>
            <h3>Please Sign In</h3>
            <div style={{ margin: "20px" }}>
                <button onClick={handleGoogleSign}>Sign In With Google</button>
            </div>

            <form>
                <input type="email" placeholder='Enter Your Email' /> <br />
                <input type="password" placeholder='Enter Your Password' /> <br />
                <input type="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default Login;