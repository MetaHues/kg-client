import React from 'react'
import styled from 'styled-components'

// Styled
const TextArea = styled.div`
    color: black;
    flex: 1;
    align-self: center;
    padding: 0 1rem;
`   

const Row = styled.div`
    display: flex;
    margin-bottom: 2rem;
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

const Activity = ({user, post, children}) => {
    return (
        <Row>
            <UserImg src={user.img} alt='userName'/>
            <TextArea>
                <UserName>{user.name}</UserName>
                {children}
            </TextArea>
            <PostImg src={post.media.img} alt='post'/>
        </Row>
    )
}

export default Activity