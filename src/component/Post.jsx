import React, { Component } from 'react'
import Card from './Card'

class Post extends Component {
    render() {
        return (
            <div className='Post'>
                <Card postId={this.props.match.params.postId} />
            </div>
        )
    }
}

export default Post