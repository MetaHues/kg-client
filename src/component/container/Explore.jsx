import React, { Component } from 'react'
import Axios from 'axios'
import path from 'path'

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
        let url = 'https://metahues-kg-api.herokuapp.com'
        if(process.env.API_URL) url = process.env.API_URL
        console.log(url)
        console.log(`${url}/post`)
        let p = path.join(url, '/post')
        console.log(typeof url)
        console.log(p)
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