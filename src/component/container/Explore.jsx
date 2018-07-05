import React, { Component } from 'react'
import axios from 'axios'

// components
import PostGrid from '../partial/PostGrid'
import Search from '../partial/Search'
import NavigatorMobile from '../navigation/NavigatorMobile'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        axios.get('/api/post')
        .then(posts => {
            this.setState({posts: posts.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if(this.state.posts === null) return ( <div className = 'Home' />)
        return ( 
            <div className = 'Explore'>
                <Search />
                <PostGrid posts={this.state.posts} />
                <NavigatorMobile/>
            </div>
        )
    }
}

export default Home