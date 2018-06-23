import React, { Component } from 'react'

// components
import Card from '../partial/Card'

class Post extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='Post'>
                <Card postId={this.props.match.params.postId} />
            </div>
        )
    }
}

export default Post