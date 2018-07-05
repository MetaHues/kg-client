import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// style
import '../../css/PostGridTile.css'

class PostGridTile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            post: null,
        }
    }

    componentDidMount() {
        axios.get(`/api/post/${this.props.postId}`)
        .then(postRes => {
            axios.get(`/api/user/${postRes.data.userId}`)
            .then(userRes => {
                this.setState({post: postRes.data, user: userRes.data})
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
        if(this.state.user === null || this.state.post === null) {
            return (
                <div className='PostGridTile'>
                    <img src='' alt=''  />
                </div>
            )
        }
        return (
            <div className='PostGridTile'>
                <Link to={`/post/${this.state.post._id}`}>
                    <img src={this.state.post.mediaUrl} alt='' />
                </Link>
            </div>
        )
    }
}

export default PostGridTile