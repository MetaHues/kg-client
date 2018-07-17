import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// components
import PostList from '../partial/PostList'
import NavigatorMobile from '../navigation/NavigatorMobile'

// actions
import addUser from '../../action/users'

class UserPage extends Component {

    render() {
        console.log(this.props)
        // load friends
        let isHome = this.props.match.path === '/home'

        if(!isHome) {
            this.userId = this.props.match.params.userId
            this.user = this.props.users[this.userId]
        }
        let postsLoaded = this.props.posts !== undefined 
        let userLoaded = this.user !== undefined

        if(!postsLoaded) {
            return (<div className='UserPage' />)
        }
        console.log('postArray', postArray)
        // const peopleArray = Object.keys(peopleObj).map(i => peopleObj[i])

        
        // TODO: filter by friends
        if(isHome) {
            let postArray = Object.keys(this.props.posts).map((key) => {return this.props.posts[key]})
            let sortedPostArray = postArray.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt)
            })
            return(
                <div className='UserPage'>
                    <PostList posts={sortedPostArray} />
                    <NavigatorMobile/>
                </div>
            )
        }

        if(!userLoaded) {
            axios.get(`/api/user/${this.userId}`)
                .then(userRes => {
                    this.props.addUser(userRes.data)
                })
                .catch(err => {
                    console.log(err)
                })
            return (<div className='UserPage' />)
        }
        
        let postArray = this.props.posts.filter(post => { return post.userId === this.userId})
        let sortedPostArray = postArray.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return (
            <div className='UserPage'>
                <PostList posts={sortedPostArray} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)