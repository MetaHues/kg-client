import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

// components
import Comments from './Comments'
import FollowButton from './FollowButton'

// Styling
import '../../css/Card.css'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            post: null,
        }
    }

    componentDidMount() {
        console.log('card mount')
        // get card data
        // TODO: move this into app // can't this may be access directly
        if(this.props.post !== undefined) {
            Axios.get(`/api/user/${this.props.post.userId}`)
            .then(userRes => {
                this.setState({user: userRes.data})
            })
            .catch(err => {
                console.log(err)
            })
        } 
    }

    getHours(createdAtString) {
        const createdAt = new Date(createdAtString)
        return `Created: ${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
    }

    addFriend() {
        let friend = {
            userId: this.state.user._id
        }
        Axios.post('/api/user/friend', friend)
                .then(res => {
                    console.log(res)
                    // the button needs to know who your friends are
                    console.log('addfriendreturn', res.data.self)
                    this.props.setSelf(res.data.self)
                })
                .catch(err => {
                    console.log('addFriend err', err)
                })
    }

    render() {
        if(this.state.user === null || this.props.post === null || !this.props.post.media.img) return null
        return (
            <article className="kard">
                <div className="section header">
                    <Link to={`/user/${this.state.user._id}`}>
                        <img src={this.state.user.img} alt="" srcSet=""/>
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

export default Card
