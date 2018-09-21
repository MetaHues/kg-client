import React from 'react'
import { Link } from 'react-router-dom'
import HeaderNav from '../../navigation/HeaderNav'

// style
import './style.css'

// Functions
const renderTitle = (title) => {
    if(title) return <h1 className='main-header_title'>{title}</h1>;
    return <div></div>;
}

export default function PageHeader({title}) {
    return (
        <header className='main-header'>
            <div className='main-header_container'>
                <div className='main-header_logo logo'>
                    <Link to='/'>KittyGlitter</Link>
                </div>
                {renderTitle(title)}
                <HeaderNav />
            </div>
        </header>
    )
}