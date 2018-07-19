import React from 'react'

// style
import '../../css/ProfileHeader.css'

export default function ProfileHeader() {
    return (
        <header className='profile-header'>
            <div className='profile-header_logo logo'>KittyGlitter</div>
            <h1 className='profile-header_title'>Profile</h1>
            <button className='profile-header_edit-button'>Edit</button>
        </header>
    )
}