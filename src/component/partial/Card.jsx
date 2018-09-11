import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'
import get from 'lodash.get'

// components
import Comment from './Comment'
import FollowButton from './FollowButton'
import CommentInput from './CommentInput'
import CommentArea from './CommentArea'

// actions
import addUser from '../../action/users'

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
                <CommentArea user={user} post={post} comments={this.state.comments} />
                <div className="section time_posted">{this.getHours(this.props.post.createdAt)}</div>

                {/* <div className="section interactions">
                    <a className="like_button"><i className="fa fa-heart-o"/></a>
                    <a className="comment_button"><i className="fa fa-diamond"/></a>
                    <a className="bookmark_button"><i className="fa fa-bookmark-o"/></a>
                </div>
                <div className="section like_info">
                    <p><strong>{this.state.post.likes} Grumpys</strong></p>
                </div>
                */}
                <CommentInput post={post} addComments={this.addComments} parent={this} />
            </article>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addUser: addUser }, dispatch)
}

const mapStateToProps = (state) => {
    return { 
        self: state.self,
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
