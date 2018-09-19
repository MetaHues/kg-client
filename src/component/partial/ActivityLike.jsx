import React from 'react'
import styled from 'styled-components'

import TimePassed from '../partial/TimePassed'

const TextArea = styled.div`
    color: black;
    flex: 1;
    align-self: center;
    padding: 0 1rem;
`   

const Row = styled.div`
    width: 700px;
    display: flex;
    margin-bottom: 2rem;

    @media (max-width: 700px) {
        width: 100vw;
    }
`

const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 1rem;
`

const PostImg = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    margin-right: 1rem;
`

const UserName = styled.div`
    font-weight: 700;
    display: inline;
`

const UserComment = styled.span`
    margin-left: .5rem;
`

const ActivityLike = ({user, post, createdAt}) => {
    return (
        <Row>
            <UserImg src={user.img} alt='userName'/>
            <TextArea>
                <UserName>{user.name}</UserName>
                <UserComment>{`liked your photo.`}</UserComment>
                <TimePassed createdAt={createdAt}/>
            </TextArea>
            <PostImg src={post.media.img} alt='post'/>
        </Row>
    )
}

export default ActivityLike