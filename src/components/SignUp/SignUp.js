import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h3>Please Sign Up</h3>
            <form>
                <input type="text" placeholder='Enter Your Name' /> <br />
                <input type="email" placeholder='Enter Your Email' /> <br />
                <input type="password" placeholder='Enter Your Password' /> <br />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;