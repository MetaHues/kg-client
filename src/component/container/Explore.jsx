import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// components
import PostViewer from './PostViewer'
import Search from '../partial/Search'
import NavigatorMobile from '../navigation/NavigatorMobile'

class Explore extends Component {
    render() {
        if(this.props.posts === null) return ( <div className = 'Explore' />)
        return ( 
            <div className = 'Explore'>
                <Search />
                <PostViewer posts={this.props.posts} />
                <NavigatorMobile/>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return { posts: store.posts }
}

export default connect(mapStateToProps)(Explore)