import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// components
import PostGrid from '../partial/PostGrid'
import Search from '../partial/Search'
import NavigatorMobile from '../navigation/NavigatorMobile'

class Explore extends Component {
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
        console.log(this.props.posts)
    }

    render() {
        if(this.state.posts === null) return ( <div className = 'Explore' />)
        return ( 
            <div className = 'Explore'>
                <Search />
                <PostGrid posts={this.props.posts} />
                <NavigatorMobile/>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return { posts: store.posts }
}

export default connect(mapStateToProps)(Explore)