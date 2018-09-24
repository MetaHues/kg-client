import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import PostList from './PostList'
import NavigatorMobile from '../../shared/NavigatorMobile'
import PostGrid from './PostGrid'

// styles
import './style.css'

class PostViewer extends Component {
    render() {
        let { posts } = this.props
        if(this.props.includeUsers) {
            // keep only included userid's posts
            posts = posts.filter(post => this.props.includeUsers.includes(post.userId))
        }
        let view = null;
        if(this.props.view === 'LIST') {
            view = <PostList posts={posts} />
        } else {
            view = <PostGrid posts={posts} />
        }
        return (
            <div className='PostViewer'>
                {view}
                <NavigatorMobile/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostViewer)