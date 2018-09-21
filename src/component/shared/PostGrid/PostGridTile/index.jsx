import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import get from 'lodash.get'

// style
import './style.css'

class PostGridTile extends Component {
    render() {
        let img = get(this.props, ['post', 'media', 'img'])
        if(!img) return null
        return (
            <div className='PostGridTile'>
                <Link to={`/post/${this.props.post._id}`}>
                    <img src={this.props.post.media.img} alt='' />
                </Link>
            </div>
        )
    }
}

export default PostGridTile