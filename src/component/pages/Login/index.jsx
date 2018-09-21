import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Style
import './style.css'

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__container login__container--border">
                    <div className="login__logo logo">
                        <Link className='logo-link' to='/'>KittyGlitter</Link>
                    </div>
                    <div className='login__img-container'>
                        <Link to='/'>
                            <img className='login__gif' src="https://media.giphy.com/media/3o85xAfFLHv8scEHsc/giphy.gif" alt=""/>
                        </Link>
                    </div>
                    <div className="auth_button">
                        <a href="/auth/facebook" alt="facebook login button" >
                            <button className='login_button'>
                                <i className="fa fa-facebook-square" /> Sign in with Facebook
                            </button>
                        </a> 
                    </div>
                    <div className="auth_button">
                        <a href="/auth/google" alt="google login button" >
                            <button className='login_button'>
                                <i className="fa fa-google" /> Sign in with Google
                            </button>
                        </a> 
                    </div>
                </div>
                <div className="login-footer">
                    <div className="login-footer-container">
                        <nav className="login-footer-links">
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/privacy">privacy</Link></li>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login