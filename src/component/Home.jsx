import React, { Component } from 'react'
import PostList from './PostList'
import Axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            PostList: null
        }
    }

    componentDidMount() {
        let url = 'localhost:3000'
        if(typeof process.env.API_URL) url = process.env.API_URL


        Axios.get(`${url}/post}`)
        .then(posts => {
            console.log(posts)
            this.setState({PostList: <PostList posts={posts.data} />})
        })
        .catch(err => {
            console.log(err)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className = 'Home'>
                {this.state.PostList}
            </div>
        )
    }
}

export default Home