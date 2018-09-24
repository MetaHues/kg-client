import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// styles
import './style.css'

const NavList = styled.ul`
    display: none;
    @media (min-width: 700px) {
        display: flex;
    }
`

const NavItem = styled.li`
    padding: .5em .5em;
`

export default function HeaderNav() {
    return (
        <nav>
            <NavList>
                <NavItem>
                    <Link to={'/home'}>
                        <i className='fa fa-home'/>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'/explore'}><i className='fa fa-search'/></Link>
                </NavItem>
                <NavItem>
                    <Link to={'/createpost'}><i className='fa fa-camera-retro'/></Link>
                </NavItem>
                <NavItem>
                    <Link to={'/notifications'}><i className="fa fa-diamond"/></Link>
                </NavItem>
                <NavItem>
                    <Link to={'/profile'}><i className="fa fa-user-o"/></Link>
                </NavItem>                        
            </NavList>
        </nav>
    )
}