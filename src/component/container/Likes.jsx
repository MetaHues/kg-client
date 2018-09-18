import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

// components
import MainHeader from '../partial/MainHeader'
import NavMobile from '../navigation/NavigatorMobile'
import ActivityComment from '../partial/ActivityComment'

// Testing inline styles
const likeStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const likesContainer = {
    height: 'calc(100vh - 33px - 45px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const tempStyle = {
    fontSize: '2rem',
    display: 'inline-block',
    marginBottom: '2rem'
}

// Prefer styled components
const Comment = styled.p`
    color: blue;
`

const Like = styled.p`
    color: red;
`

export default class Likes extends Component {
    constructor(props){
        super(props)

        this.state = {
            notifications: null
        }
    }

    async componentDidMount() {
        if(this.state.notifications && this.state.notifications === 'loading') return
        this.setState({notifications: 'loading'})
        try {
            let activities = (await axios.get('/api/self/recentactivity')).data
            console.log(activities)
            let notifications = []
            activities.comments.forEach(comment => {
                notifications.push(<ActivityComment key={comment.createdAt} userName={comment.userName} userComment={comment.msg} userImg={null} postImg={null} postId={comment.postId} activityDate={comment.createdAt}/>)
            })
            activities.likes.forEach(like => {
                notifications.push(<Like key={like.createdAt}>{`${like.userId} like your photo. ${like.postId} createdAt: ${like.createdAt}`}</Like>)
            })
            let sortedNotifications = notifications.sort((a, b) => {
                return a.key < b.key
            })
            this.setState({notifications: sortedNotifications})
        } catch(err) {
            console.log('fetch recent activity err', err)
        }
    }

    render() {
        return (
            <div className='likes' style={likeStyle}>
                <MainHeader title={'likes'} />

                {this.state.notifications}
                <div className='likes-container' style={likesContainer}>
                    <div><h1 style={tempStyle}><i className='fa fa-meh-o'/> In Progress...</h1></div>
                    <button onClick={this.props.history.goBack}>Go back</button>
                </div>
                <NavMobile />
            </div>
        )
    }
}