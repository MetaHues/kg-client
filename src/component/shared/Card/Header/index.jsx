import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Components
import FollowButton from './FollowButton'

// Styled
const UserName = styled.h2`
    font-weight: 100;
    text-transform: capitalize;
    margin-left: 1.5rem;
    color: #4e4e4e;
    font-size: 1rem;
    @media(min-width: 500px) {
        font-size: 1.5rem;
    }
`

const UserThumb = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;

    @media (min-width: 700px) {
        width: 40px;
        height: 40px;
        margin: .25rem 0;
    }
`

const CardHeader = ({user}) => {
    return (
        <div className="section header">
            <Link to={`/user/${user._id}`}>
                <UserThumb src={user.img} alt="" srcSet=""/>
            </Link>
            <Link to={`/user/${user._id}`}>
                <UserName>{user.name}</UserName>
            </Link>
            <FollowButton userId={user._id}/>
        </div>
    )
}
export default CardHeader