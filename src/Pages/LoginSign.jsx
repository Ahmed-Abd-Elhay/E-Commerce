import React from 'react';
import "./Css/login.css";

const LoginSign = () => {
    return (
        <div className='sign-up'>
            <div className="container">
                <h1>Sign Up</h1>
                <div className="fildes">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <div className="login-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By Countiuing, i agree to the terms of use & privacy policy</p>
                </div>
                <button>Sign Up</button>
                <div className="sign-up-login">Already have an account? <span>Login</span></div>
            </div>
        </div>
    )
}

export default LoginSign;
