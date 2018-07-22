import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import PostList from '../partial/PostList'
import NavigatorMobile from '../navigation/NavigatorMobile'
import PostGrid from '../partial/PostGrid'

// styles
import '../../css/PostViewer.css'

class PostViewer extends Component {

    render() {
        let posts = this.props.posts
        if(this.props.includeUsers) {
            posts = this.props.posts.filter(post => this.props.includeUsers.includes(post.userId))
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