import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'
import get from 'lodash.get'

// components
import FollowButton from './FollowButton'
import CommentInput from './CommentInput'
import CommentArea from './CommentArea'

// actions
import addUser from '../../action/users'
import addPosts from '../../action/posts'

// styles
import '../../css/Card.css'

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
        })
        .catch(err => {
            console.log(err)
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
            this.getComments()
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

    isPostLikedBySelf() {
        console.log(this.props)
        const {likes} = this.props.post
        console.log(this.props.self)
        // const {likes} = {
        //     likes: [{userId: this.props.self._id, userName: this.props.self.name}]
        // }
        console.log(likes)
        let isLiked = false
        for(let i = 0; i < likes.length; i++) {
            let userLike = likes[i]
            if(userLike.userId === this.props.self._id) {
                isLiked = true
                break
            }
        }
        return isLiked
    }



    toggleLike() {
        let isPostLiked = this.isPostLikedBySelf()

        if(isPostLiked) {
            console.log('remove like')
            Axios.delete(`/api/like/${this.props.post._id}`)
            .then(res => {
                console.log(res.data)
                this.addPosts(res.data)  
            })
            .catch(err => {
                console.log(err)
                // need to display error in some way
            })
        } else {
            console.log('add like')
            console.log('url', `/api/like/${this.props.post._id}`)
            Axios.post(`/api/like/${this.props.post._id}`, {})
            .then(res => {
                console.log(res.data)
                this.removeLikes(res.data)
            })
            .catch(err => {
                console.log(err)
                // need to display error in some way
            })
        }
    }

    removeLikes() {
        let updatedPost = Object.assign({}, this.props.post)
        updatedPost.likeCount -= 1
        updatedPost.likes = updatedPost.likes.filter(user => {
            return user._id !== this.props.self._id;
        })
        this.props.addPosts([updatedPost])
    }

    render() {
        let {user, comments} = this.state
        let {post} = this.props
        let img = get(this.props, ['post', 'media', 'img'])
        if(!user || !post  || !img || !comments) return null
        return (
            <article className="kard">
                <div className="section header">
                    <Link to={`/user/${this.state.user._id}`}>
                        <img src={user.img} alt="" srcSet=""/>
                    </Link>
                    <Link to={`/user/${this.state.user._id}`}>
                        <div className="kitty_name"><strong>{this.state.user.name}</strong></div>
                    </Link>
                    <FollowButton userId={this.state.user._id}/>
                </div>
                <div className="media">
                    {this.props.post.media && this.props.post.media.img !== undefined &&
                        <img src={this.props.post.media.img} alt="" />
                    }
                </div>

                <div className="section interactions">
                    <a className="like_button" onClick={this.toggleLike.bind(this)}><i className="fa fa-heart-o"/></a>
                </div>
                <div className="section like_info">
                    <p><strong>{this.props.post.likeCount} Grumpys</strong></p>
                </div>

                <CommentArea user={user} post={post} comments={this.state.comments} />
                <div className="section time_posted">{this.getHours(this.props.post.createdAt)}</div>

                {/* <a className="comment_button"><i className="fa fa-diamond"/></a> */}
                {/* <a className="bookmark_button"><i className="fa fa-bookmark-o"/></a> */}
                
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
