import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

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
        // get card data
        // TODO: move this into app
        Axios.get(`/api/post/${this.props.postId}`)
        .then(postRes => {
            this.setState({post: postRes.data})
            Axios.get(`/api/user/${postRes.data.userId}`)
            .then(userRes => {
                this.setState({user: userRes.data})
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })

        // if(users[post.userId]) {
        //     this.setState({user: users[post.userId], imgUrl: imgUrl})
        // } else {
        //     axios.get(`/api/user/${this.props.post.userId}`)
        //     .then(userRes => {
        //         this.setState({user: userRes.data, imgUrl: imgUrl})
        //         this.props.addUser(userRes.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        // }
    }

    getHours(createdAtString) {
        const createdAt = new Date(createdAtString)
        const hoursSinceCreatedAt = Math.round((Date.now() - createdAt.getTime()) / 36e5)
        return `Created: ${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
    }

    render() {
        if(this.state.user === null || this.props.post === null) return null
        return (
            <article className="kard">
                <div className="section header">
                    <Link to={`/user/${this.state.user._id}`}>
                        <img src={this.state.user.img} alt="" srcSet=""/>
                    </Link>
                    <Link to={`/user/${this.state.user._id}`}>
                        <div className="kitty_name"><strong>{this.state.user.name}</strong></div>
                    </Link>
                </div>
                <div className="media">
                    {this.state.post.media && this.state.post.media.img !== undefined &&
                        <img src={this.state.post.media.img} alt="" />
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
                <div className="section comments">
                    <ol>
                        <li><strong>{this.state.user.name} </strong>{this.state.post.postText}</li>
                        {this.state.post.comments.map(comment => {
                            return <li><strong>{comment.userName} </strong>{comment.text}</li>
                        })}
                    </ol>
                </div>
                <div className="section comment_area">
                <input type="text" name="" id="" placeholder="Add a some glitter..."/>
                <a><i className="fa fa-ellipsis-h"/></a>
                </div> */}
                <div className="section time_posted">{this.getHours(this.props.post.createdAt)}</div>
                
            </article>
        );
    }
}

export default Card;
