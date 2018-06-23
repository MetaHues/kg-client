import React, { Component } from 'react'
import Axios from 'axios'

// components
import PostList from '../partial/PostList'

class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {PostList : null}
    }

    componentDidMount() {
        let url = 'https://metahues-kg-api.herokuapp.com'
        if(process.env.API_URL !== undefined) url = process.env.API_URL

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
            <div className = 'UserPage'>
                {this.state.PostList}
            </div>
        )
    }
}

export default UserPage