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
                    <button className='profile-header_logout-button'>Logout</button>
                </a>
            </div>
        </header>
    )
}