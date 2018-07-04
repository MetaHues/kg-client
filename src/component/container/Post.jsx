import React, { Component } from 'react'

// components
import Card from '../partial/Card'
import NavigatorMobile from '../navigation/NavigatorMobile'

class Post extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='Post'>
                <Card postId={this.props.match.params.postId} />
                <NavigatorMobile/>
            </div>
        )
    }
}

export default Post