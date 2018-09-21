import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'
import get from 'lodash.get'

// components
import CardHeader from './Header'
import CardMedia from './Media'
import CardInteractionBar from './InteractionBar'
import CommentInput from './CommentArea/CommentInput'
import CommentArea from './CommentArea'

// actions
import addUser from '../../../action/users'
import addPosts from '../../../action/addPosts'

// styles
import './style.css'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            comments: [],
            commentArea: null,
            commentsLoading: false,
        }
    }

    getUser() {
        if(!this.props.post) return 

        let user = this.props.users[this.props.post.userId]
        if(user) {
            this.setState({user: user})
            return
        }
        Axios.get(`/api/user/${this.props.post.userId}`)
        .then(userRes => {
            this.setState({user: userRes.data})
            return
        })
        .catch(err => {
            console.log(err)
            return
        })
    }

    getComments() {
        if(this.state.commentsLoading || this.state.commentsLoaded) return

        this.setState({commentsLoading: true})

        Axios.get(`/api/comment/${this.props.post._id}`)
        .then(res => {
            this.setState({commentsLoaded: true})
            this.addComments(res.data, this)
            return
        }).catch(err => {
            this.setState({commentsLoading: false})
            setTimeout(1000, this.getComments())
            console.log(err)
        })
    }

    

    addComments(newComments, card) {
        card.setState({comments: card.state.comments.concat(newComments)})
    }

    componentDidMount() {
        this.getUser()
        this.getComments()
    }

    getHours(createdAtString) {
        const createdAt = new Date(createdAtString)
        return `Created: ${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
    }

    render() {
        let {user, comments} = this.state
        let {post} = this.props
        let img = get(this.props, ['post', 'media', 'img'])
        if(!user || !post  || !img || !comments) return null
        return (
            <article className="kard">
                <CardHeader user={user}/>
                <CardMedia post={post}/>                
                <CardInteractionBar post={post} self={this.props.self} />
                <CommentArea user={user} post={post} comments={this.state.comments} />
                <div className="section time_posted">{this.getHours(this.props.post.createdAt)}</div>
                <CommentInput post={post} addComments={this.addComments} parent={this} />
            </article>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addUser, addPosts }, dispatch)
}

const mapStateToProps = (state) => {
    return { 
        self: state.self,
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
