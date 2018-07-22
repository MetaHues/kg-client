import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// import components
import Explore from './container/Explore'
import Post from './container/Post'
import PostViewer from './container/PostViewer'
import Login from './container/Login'
import AuthenticatedRoute from './container/AuthenticatedRoute'
import Profile from './container/Profile'
import CreatePost from './container/CreatePost'
import Home from './container/Home'
import Likes from './container/Likes'

// actions
import addPosts from '../action/posts'
import addUser from '../action/users'

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
            console.log(res)
        })
        .catch(err => {
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
                        <Route path='/user/:userId' component={PostViewer} />
                        <AuthenticatedRoute exact path='/likes' component={Likes} />
                        <AuthenticatedRoute exact path='/createpost' component={CreatePost} />
                        <AuthenticatedRoute exact path='/home' component={Home} />
                        <AuthenticatedRoute exact path='/profile' render={() => (<Profile user={this.props.self} />)} />
                        <Route render={()=>(<div>no route!</div>)} />
                    </Switch>
                </div>
            </BrowserRouter>     
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addPosts: addPosts, addUser: addUser }, dispatch)
}

const mapStateToProps = (state) => {
    return { self: state.self }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)