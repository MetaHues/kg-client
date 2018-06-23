import React, { Component } from 'react'
import Axios from 'axios'

import PostList from './PostList'
import PostGrid from './PostGrid'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        let url = 'localhost:3000'
        if(typeof process.env.API_URL) url = process.env.API_URL

        Axios.get(`${url}/post`)
        .then(posts => {
            console.log(posts)
            this.setState({posts: posts.data})
        })
        .catch(err => {
            console.log(err)
        })
        .catch(err => console.log(err))
    }

    render() {
        if(this.state.posts === null) return ( <div className = 'Home' />)
        if(this.props.view === 'grid') {
            return ( 
                <div className = 'Home'>
                    <PostGrid posts={this.state.posts} />
                </div>
            )
        }
        return (
            <div className = 'Home'>
                <PostList posts={this.state.posts} />
            </div>
        )
    }
}

export default Home