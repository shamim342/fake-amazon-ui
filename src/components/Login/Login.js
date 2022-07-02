import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <>
            <div className="login-section">
                    <h4 style={{textAlign:"center"}}>Login With</h4>
                <form >
                    <div className='google-btn'>
                        <button className='btn' onClick={handleGoogleLogin} >
                        <i class="fab fa-google" style={{marginRight:".6em" , fontSize:"2em"}}></i>
                            Google
                        </button>
                    </div>
<div style={{margin:"0 auto" , display:"flex" , justifyContent:"center"}}>---------------------------------------------------------------------------</div>
                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit" className='btn'>Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div class="container" style={{ background: "#fff" }}>
                        <button type="button" class="cancelbtn btn">Cancel</button>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>

            </div>

        </>
        // <div className="login-form">
        //     <div>
        //         <h2>Login</h2>
        //         <form>
        //             <input type="email" name="" id="" placeholder="Your Email" />
        //             <br />
        //             <input type="password" name="" id="" />
        //             <br />
        //             <input type="submit" value="Submit" />
        //         </form>
        //         <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
        //         <div>-------or----------</div>
        //         <button
        //             className="btn-regular"
        //             onClick={handleGoogleLogin}
        //         >Google Sign In</button>
        //     </div>
        // </div>
    );
};

export default Login;