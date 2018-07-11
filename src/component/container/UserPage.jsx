import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// components
import PostList from '../partial/PostList'
import NavigatorMobile from '../navigation/NavigatorMobile'

class UserPage extends Component {
    render() {
        if(!this.props.posts) return (<div className='UserPage' />)
        return (
            <div className='UserPage'>
                <PostList posts={this.props.posts} />
                <NavigatorMobile/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(UserPage)