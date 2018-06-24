import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
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
        let url = 'https://metahues-kg-api.herokuapp.com'
        if(process.env.API_URL !== undefined) url = process.env.API_URL


        Axios.get(`${url}/post/${this.props.postId}`)
        .then(postRes => {
            this.setState({post: postRes.data})
            Axios.get(`${url}/user/${postRes.data.userId}`)
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