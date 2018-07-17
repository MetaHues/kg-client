import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// components
import PostList from '../partial/PostList'
import NavigatorMobile from '../navigation/NavigatorMobile'

// actions
import addUser from '../../action/users'

// styles
import '../../css/UserPage.css'

class UserPage extends Component {

    render() {
        console.log(this.props)
        // load friends
        let isHome = this.props.match.path === '/home'

        if(isHome) {
            this.user = this.props.self
        } else {
            this.userId = this.props.match.params.userId
            this.user = this.props.users[this.userId]
        }

        let postsLoaded = this.props.posts !== undefined 
        let userLoaded = this.user !== undefined

        if(!postsLoaded) {
            return (<div className='UserPage' />)
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



        // TODO: filter by friends
        let postArray = []
        let title = ''
        if(isHome) {
            postArray = Object.keys(this.props.posts).map((key) => {return this.props.posts[key]})
            console.log(postArray)
            title = 'Friends Posts'
            // let sortedPostArray = postArray.sort((a, b) => {
            //     return new Date(b.createdAt) - new Date(a.createdAt)
            // })
            // return(
            //     <div className='UserPage'>
            //         <PostList posts={sortedPostArray} />
            //         <NavigatorMobile/>
            //     </div>
            // )
        } else {
            title = `${this.user.name} Posts`
            postArray = this.props.posts.filter(post => { return post.userId === this.userId})
        }
        let sortedPostArray = postArray.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return (
            <div className='UserPage'>
                <h1 className="UserPage__title">{title}</h1>
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