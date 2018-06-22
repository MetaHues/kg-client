import React, { Component } from 'react'
import Card from './Card'
import Axios from 'axios'

class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {PostList : null}
    }

    componentDidMount() {
        let url = 'localhost:3000'
        if(typeof process.env.API_URL) url = process.env.API_URL

        Axios.get(`${url}/post?userId=${this.props.match.params.userId}`)
        .then(posts => {
            console.log(posts)
            let postList = <PostList posts={posts.data} />
            this.setState({PostList : postList})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className = 'PostList'>
                {this.state.postList}
            </div>
        )
    }
}

export default UserPage