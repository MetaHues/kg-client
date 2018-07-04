import React, { Component } from 'react'

// components
import Card from './Card'

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardList: null
        }
    }

    componentDidMount() {
        let cardList = this.props.posts.map(post =>  {return <Card key={post._id} postId={post._id} /> })
        this.setState({cardList: cardList})
    }

    render() {
        return (
            <div className = 'PostList'>
                {this.state.cardList}
            </div>
        )
    }
}

export default PostList