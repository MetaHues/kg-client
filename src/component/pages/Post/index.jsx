import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import Card from '../../shared/Card'
import NavigatorMobile from '../../shared/NavigatorMobile'
import MainHeader from '../../shared/MainHeader'

// styles
import './style.css'

class Post extends Component {
    constructor(props) {
        super(props)
        this.isNotLoaded = true;
    }

    isLoaded() {
        const posts = this.props.posts
        const postId = this.props.match.params.postId

        // check if correct params passed in
        if(posts === undefined || postId === undefined) {
            return false
        }

        // filter post
        this.post = this.props.posts.filter(post => post._id === postId)[0]

        // check if post is loaded yet
        if(this.post === undefined) {
            return false
        }

        return true
    }

    render() {
        if(!this.isLoaded()) {
            return (<div className='Post' />)
        }

        return (
            <div className='Post'>
                <MainHeader title={'Post'}/>
                <div className='post_card'>
                    <Card postId={this.post._id} post={this.post} />         
                </div>       
                <NavigatorMobile/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(Post)