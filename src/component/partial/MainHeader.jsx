import React from 'react'
import { Link } from 'react-router-dom'
import HeaderNav from '../navigation/HeaderNav'

// style
import '../../css/MainHeader.css'

export default function MobileHeader(props) {
    return (
        <header className='main-header'>
            <div className='main-header_container'>
                <div className='main-header_logo logo'>
                    <Link to='/'>KittyGlitter</Link>
                </div>
                <h1 className='main-header_title'>{props.title}</h1>
                <HeaderNav />
            </div>
        </header>
    )
}