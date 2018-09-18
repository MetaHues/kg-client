import React from 'react'
import styled from 'styled-components'

const TextArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: black;
    flex: 1;
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
`

const UserName = styled.div`
    font-weight: 700;
`

const ActivityDate = styled.div`
    color: gray;
    margin-left: .25rem;
`

const UserComment = styled.div`
    margin-left: .25rem;
`

const ActivityComment = ({userName, userImg, userComment, postImg, postId, activityDate}) => {
    return (
        <Row>
            <UserImg src={'userImg'} alt='userName'/>
            <TextArea>
                <UserName>{userName}</UserName>
                <UserComment>{`commented: ${userComment}`}</UserComment>
                <ActivityDate>{activityDate}</ActivityDate>
            </TextArea>
            <PostImg src={'postImg'} alt='post'/>
        </Row>
    )
}

export default ActivityComment