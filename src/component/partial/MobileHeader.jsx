import React from 'react'
import { Link } from 'react-router-dom'

// style
import '../../css/MobileHeader.css'

export default function mobileHeader(props) {
    return (
        <header className='mobile-header'>
            <div className='mobile-header_logo logo'>
                <Link to='/'>KittyGlitter</Link>
            </div>
            <h1 className='mobile-header_title'>{props.title}</h1>
            <div className='mobile-header_spacer'/>
        </header>
    )
}