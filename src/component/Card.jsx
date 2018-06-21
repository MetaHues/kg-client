import React, { Component } from 'react'
import '../css/Card.css'
import Axios from 'axios'
import db from '../config/db'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            post: null,
        }
    }

    componentDidMount() {
        let uri = db.localUri
        if(process.env.NODE_ENV === 'production') {
            uri = db.cloudUri
        }
        Axios.get(`${uri}/post/${this.props.postId}`)
        .then(postRes => {
            this.setState({post: postRes.data})
            Axios.get(`${uri}/user/${postRes.data.userId}`)
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
    }

    render() {
        if(this.state.user === null || this.state.post === null) return null
        return (
            <article className="kard">
                <div className="section header">
                    <img src={this.state.user.profileImg} alt="" srcSet=""/>
                    <div className="kitty_name"><strong>{this.state.user.name}</strong></div>
                </div>
                <div className="media">
                    <img src={this.state.post.mediaUrl} alt="" />
                </div>
                <div className="section interactions">
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
                <div className="section time_posted">69 HOURS AGO</div>
                <div className="section comment_area">
                <input type="text" name="" id="" placeholder="Add a some glitter..."/>
                <a><i className="fa fa-ellipsis-h"/></a>
                </div>
            </article>
        );
    }
}

export default Card;
