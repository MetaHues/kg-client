import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// components
import PostList from '../partial/PostList'
import NavigatorMobile from '../navigation/NavigatorMobile'
import PostGrid from '../partial/PostGrid'

// actions
import addUser from '../../action/users'

// styles
import '../../css/PostViewer.css'

class PostViewer extends Component {

    render() {
        let posts = this.props.posts
        if(this.props.userIds) {
            posts = this.props.posts.filter(post => this.props.userIds.includes(post.userId))
        }
        let view = null;
        if(this.props.view === 'LIST') {
            view = <PostList posts={posts} />
        } else {
            view = <PostGrid posts={posts} />
        }
        console.log('PostViewer props', this.props)
        return (
            <div className='PostViewer'>
                {view}
                <NavigatorMobile/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addUser: addUser }, dispatch)
}

const mapStateToProps = (state) => {
    return { 
        self: state.self,
        posts: state.posts,
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostViewer)