import React from 'react'
import { Link } from 'react-router-dom'

// styles
import '../../css/HeaderNav.css'

export default function HeaderNav() {
    return (
        <div className='header-nav'>
            <nav className='header-nav-list-container'>
                <ul className='header-nav-list'>
                    <Link className='header-nav-list-item' to={'/home'}><li><i className='fa fa-home'/></li></Link>
                    <Link className='header-nav-list-item' to={'/explore'}><li><i className='fa fa-search'/></li></Link>
                    <Link className='header-nav-list-item' to={'/createpost'}><li><i className='fa fa-camera-retro'/></li></Link>
                    <Link className='header-nav-list-item' to={'/likes'}><li><i className="fa fa-diamond"/></li></Link>
                    <Link className='header-nav-list-item' to={'/profile'}><li><i className="fa fa-user-o"/></li></Link>                        
                </ul>
            </nav>
        </div>
    )
}