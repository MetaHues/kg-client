import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Style
import '../../css/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="container border">
                    <div className="logo">
                        <Link className='logo-link' to='/'>KittyGlitter</Link>
                    </div>
                    <div className="login-intro-gif">
                        <img src="https://media.giphy.com/media/3o85xAfFLHv8scEHsc/giphy.gif" alt=""/>
                    </div>
                    <div className="auth_button">
                        <a href="/auth/facebook" alt="facebook login button" >
                            <button className='facebook_login'>
                                <i className="fa fa-facebook-square" /> Sign in
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