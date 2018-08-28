import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'
import get from 'lodash.get'

// components
import Comments from './Comments'
import FollowButton from './FollowButton'

// actions
import addUser from '../../action/users'

// styles
import '../../css/Card.css'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            post: null,
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

    componentDidMount() {
        this.getUser()
    }

    getHours(createdAtString) {
        const createdAt = new Date(createdAtString)
        return `Created: ${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
    }

    render() {
        let user = this.state.user
        let post = this.props.post
        console.log(user)
        let img = get(this.props, ['post', 'media', 'img'])
        if(!user || !post  || !img) return null
        return (
            <article className="kard">
                <div className="section header">
                    <Link to={`/user/${this.state.user._id}`}>
                        <img src={user.img} alt="" srcSet=""/>
                    </Link>
                    <Link to={`/user/${this.state.user._id}`}>
                        <div className="kitty_name"><strong>{this.state.user.name}</strong></div>
                    </Link>
                    {/* <button className='kard_follow-user-button' onClick={this.addFriend.bind(this)}>follow</button> */}
                    <FollowButton userId={this.state.user._id}/>
                </div>
                <div className="media">
                    {this.props.post.media && this.props.post.media.img !== undefined &&
                        <img src={this.props.post.media.img} alt="" />
                    }
                </div>
                {/* <div className="section interactions">
                    <a className="like_button"><i className="fa fa-heart-o"/></a>
                    <a className="comment_button"><i className="fa fa-diamond"/></a>
                    <a className="bookmark_button"><i className="fa fa-bookmark-o"/></a>
                </div>
                <div className="section like_info">
                    <p><strong>{this.state.post.likes} Grumpys</strong></p>
                </div>
                <div className="section comment_area">
                <input type="text" name="" id="" placeholder="Add a some glitter..."/>
                <a><i className="fa fa-ellipsis-h"/></a>
                </div> */}
                <Comments userName={this.state.user.name} msg={this.props.post.msg} />
                <div className="section time_posted">{this.getHours(this.props.post.createdAt)}</div>
            </article>
        );
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
