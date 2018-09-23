import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// styles
import './style.css'

const Nav = styled.nav `
`

const NavList = styled.ul `
    display: none;
    justify-content: flex-end;
    flex: 1;
    @media (min-width: 700px) {
        display: flex;
    }
`

export default function HeaderNav() {
    return (
        <Nav className='header-nav'>
            <NavList className='header-nav-list'>
                <Link className='header-nav-list-item' to={'/home'}><li><i className='fa fa-home'/></li></Link>
                <Link className='header-nav-list-item' to={'/explore'}><li><i className='fa fa-search'/></li></Link>
                <Link className='header-nav-list-item' to={'/createpost'}><li><i className='fa fa-camera-retro'/></li></Link>
                <Link className='header-nav-list-item' to={'/notifications'}><li><i className="fa fa-diamond"/></li></Link>
                <Link className='header-nav-list-item' to={'/profile'}><li><i className="fa fa-user-o"/></li></Link>                        
            </NavList>
        </Nav>
    )
}