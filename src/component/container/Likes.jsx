import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

// components
import MainHeader from '../partial/MainHeader'
import NavMobile from '../navigation/NavigatorMobile'
import ActivityComment from '../partial/ActivityComment'
import ActivityLike from '../partial/ActivityLike'

// Testing inline styles
const likeStyle = {
    display: 'flex',
    flexDirection: 'column',
}

// Prefer styled components
const ActivityContainer = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    align-self: center;
`

export default class Likes extends Component {
    constructor(props){
        super(props)
        this.state = {
            notifications: null
        }
    }

    // convert arrays into objects
    arrayToObject(objectArray) {
        let objects = objectArray.reduce((obj, item) => {
            obj[item._id] = item
            return obj
        }, {})
        return objects
    }

    // push comments into notifications
    addComments(notifications, comments, users, posts) {
        comments.forEach(comment => {
            notifications.push(
                <ActivityComment 
                    key={comment.createdAt} 
                    userName={users[comment.userId].name} 
                    userComment={comment.msg} 
                    userImg={users[comment.userId].img} 
                    postImg={posts[comment.postId].media.img} 
                    postId={comment.postId} 
                    activityDate={comment.createdAt}
                />
            )
        })
    }

    // push likes into notifications
    addLikes(notifications, likes, users, posts) {
        likes.forEach(like => {
            notifications.push(
                <ActivityLike 
                    key={like.createdAt}
                    user={users[like.userId]}
                    post={posts[like.postId]}
                    createdAt={like.createdAt}
                />)
        })
    }

    getNotifications(comments, likes, users, posts) {
        users = this.arrayToObject(users)
        posts = this.arrayToObject(posts)

        let notifications = []
        this.addComments(notifications, comments, users, posts)
        this.addLikes(notifications, likes, users, posts)
        let sortedNotifications = notifications.sort((a, b) => {
            return a.key < b.key
        })
        return sortedNotifications
    }

    async componentDidMount() {
        if(this.state.notifications && this.state.notifications === 'loading') return
        this.setState({notifications: 'loading'})
        try {
            let {comments, likes, users, posts} = (await axios.get('/api/self/recentactivity')).data
            const notifications = this.getNotifications(comments, likes, users, posts)
            this.setState({notifications: notifications})
        } catch(err) {
            console.log('fetch recent activity err', err)
        }
    }

    render() {
        return (
            <div className='likes' style={likeStyle}>
                <MainHeader title={'likes'} />
                <ActivityContainer>
                    {this.state.notifications}
                </ActivityContainer>
                <NavMobile />
            </div>
        )
    }
}