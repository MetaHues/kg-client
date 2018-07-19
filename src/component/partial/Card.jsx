import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

// components
import Comments from './Comments'

// Styling
import '../../css/Card.css'

class Card extends Component {

    // componentDidMount() {
    //     console.log('card mount')
    //     // get card data
    //     // TODO: move this into app // can't this may be access directly
    //     if(this.props.post !== undefined) {
    //         Axios.get(`/api/user/${this.props.post.userId}`)
    //         .then(userRes => {
    //             this.setState({user: userRes.data})
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     } 
    //     if(users[post.userId]) {
    //         this.setState({user: users[post.userId], imgUrl: imgUrl})
    //     } else {
    //         axios.get(`/api/user/${this.props.post.userId}`)
    //         .then(userRes => {
    //             this.setState({user: userRes.data, imgUrl: imgUrl})
    //             this.props.addUser(userRes.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }

    getHours(createdAtString) {
        const createdAt = new Date(createdAtString)
        return `Created: ${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
    }

    render() {
        if(!this.props.user || !this.props.post || !this.props.post.media.img) return null;

        return (
            <article className="kard">
                <div className="section header">
                    <Link to={`/user/${this.props.user._id}`}>
                        <img src={this.props.user.img} alt="" srcSet=""/>
                    </Link>
                    <Link to={`/user/${this.props.user._id}`}>
                        <div className="kitty_name"><strong>{this.props.user.name}</strong></div>
                    </Link>
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
                <Comments userName={this.props.user.name} msg={this.props.post.msg} />
                <div className="section time_posted">{this.getHours(this.props.post.createdAt)}</div>
                
            </article>
        );
    }
}

export default Card;
