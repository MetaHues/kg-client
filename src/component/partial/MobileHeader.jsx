import React from 'react'

// style
import '../../css/MobileHeader.css'

export default function mobileHeader(props) {
    return (
        <header className='mobile-header'>
            <div className='mobile-header_logo logo'>KittyGlitter</div>
            <h1 className='mobile-header_title'>{props.title}</h1>
            <div className='mobile-header_spacer'/>
        </header>
    )
}