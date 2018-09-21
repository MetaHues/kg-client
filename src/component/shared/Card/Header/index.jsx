import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Components
import FollowButton from './FollowButton'

const CardHeader = ({user}) => {
    return (
        <div className="section header">
            <Link to={`/user/${user._id}`}>
                <img src={user.img} alt="" srcSet=""/>
            </Link>
            <Link to={`/user/${user._id}`}>
                <div className="kitty_name"><strong>{user.name}</strong></div>
            </Link>
            <FollowButton userId={user._id}/>
        </div>
    )
}
export default CardHeader