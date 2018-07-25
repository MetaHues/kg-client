import React from 'react'
import { Link } from 'react-router-dom'

// style
import '../../css/ProfileHeader.css'

export default function ProfileHeader() {
    return (
        <header className='profile-header'>
            <div className="profile-header_container">
                <div className='profile-header_logo logo'>
                    <Link to='/'>KittyGlitter</Link>
                </div>
                <h1 className='profile-header_title'>Profile</h1>
                <a className ='profile-header_logout-link' href='/auth/logout'>
                    <div className="profile-header_nav">
                        <nav>
                            <ul className='profile-header_nav-list'>
                                <Link className='profile-header_nav-list-item' to={'/home'}><li><i className='fa fa-home'/></li></Link>
                                <Link className='profile-header_nav-list-item' to={'/explore'}><li><i className='fa fa-search'/></li></Link>
                                <Link className='profile-header_nav-list-item' to={'/createpost'}><li><i className='fa fa-camera-retro'/></li></Link>
                                <Link className='profile-header_nav-list-item' to={'/likes'}><li><i className="fa fa-diamond"/></li></Link>
                                <Link className='profile-header_nav-list-item' to={'/profile'}><li><i className="fa fa-user-o"/></li></Link>                        
                            </ul>
                        </nav>
                    </div>
                    <button className='profile-header_logout-button'>Logout</button>
                </a>
            </div>
        </header>
    )
}