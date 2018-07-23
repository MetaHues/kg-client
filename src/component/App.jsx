import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// import components
import Explore from './container/Explore'
import Post from './container/Post'
import Login from './container/Login'
import AuthenticatedRoute from './container/AuthenticatedRoute'
import Profile from './container/Profile'
import CreatePost from './container/CreatePost'
import Home from './container/Home'
import Likes from './container/Likes'
import EditProfile from './container/EditProfile'

// actions
import addPosts from '../action/posts'
import addUser from '../action/users'
import setSelf from '../action/self'

class App extends Component {
    
    componentDidMount() {
        axios.get('/api/post')
        .then(res => {
            this.props.addPosts(res.data)
        }).catch(err => {
            console.log(err)
        })

        axios.get('/api/user/profile')
        .then(res => {
            this.props.addUser(res.data)
            this.props.setSelf(res.data)
            console.log(res)
        })
        .catch(err => {
            let self = {status: err.response.statusText}
            this.props.setSelf(self)
            console.log(err)
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
                        <Route exact path='/' render={() => (<Redirect to='/explore' />)} />
                        <Route path='/post/:postId' component={Post} />
                        <Route path='/user/:userId' component={Profile} />
                        <AuthenticatedRoute exact path='/likes' component={Likes} />
                        <AuthenticatedRoute exact path='/createpost' component={CreatePost} />
                        <AuthenticatedRoute exact path='/home' component={Home} />
                        <AuthenticatedRoute exact path='/profile' component={Profile} />
                        <AuthenticatedRoute exact path='/editprofile' component={EditProfile} />
                        <Route render={()=>(<div>no route!</div>)} />
                    </Switch>
                </div>
            </BrowserRouter>     
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addPosts: addPosts, addUser: addUser, setSelf: setSelf }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)