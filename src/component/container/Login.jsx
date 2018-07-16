import React, { Component } from 'react'

// Style
import '../../css/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="container border">
                    <div className="logo">
                        KittyGlitter
                    </div>
                    <div className="login-intro-gif">
                        <img src="https://media.giphy.com/media/3o85xAfFLHv8scEHsc/giphy.gif" alt=""/>
                    </div>
                    <div className="auth_button">
                        <a href="/auth/facebook" alt="facebook login button" >
                            <button className='facebook_login'>
                                Log in with Facebook
                            </button>
                        </a> 
                    </div>
                </div>
                <div className="login-footer">
                    <div className="login-footer-container">
                        <nav className="login-footer-links">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Privacy</a></li>
                            <span className="login-footer-logo">KittyGlitter</span>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login