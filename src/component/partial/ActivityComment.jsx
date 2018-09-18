import React from 'react'
import styled from 'styled-components'

import TimePassed from '../partial/TimePassed'

const TextArea = styled.div`
    color: black;
`   

const Row = styled.div`
    display: flex;
    align-items: center;
`

const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: .5rem;
`

const PostImg = styled.img`
    height: 50px;
    width: 50px;
    padding: .5rem;
    margin-left: auto;
`

const UserName = styled.div`
    font-weight: 700;
    display: inline;
`

const UserComment = styled.span`
    margin-left: .25rem;
    margin-right: .25rem;
`

const ActivityComment = ({userName, userImg, userComment, postImg, postId, activityDate}) => {
    return (
        <Row>
            <UserImg src={userImg} alt='userName'/>
            <TextArea>
                <UserName>{userName}</UserName>
                <UserComment>{`commented: ${userComment}`}</UserComment>
                <TimePassed createdAt={activityDate}/>
            </TextArea>
            <PostImg src={postImg} alt='post'/>
        </Row>
    )
}

export default ActivityComment