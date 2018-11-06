import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// import components
import Explore from './pages/Explore'
import Post from './pages/Post'
import Login from './pages/Login'
import AuthenticatedRoute from './shared/AuthenticatedRoute'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Notifications from './pages/Notifications'
import EditProfile from './pages/EditProfile'

// actions
import addPosts from '../action/addPosts'
import addUser from '../action/users'
import setSelf from '../action/self'

class App extends Component {
    
    componentDidMount() {
        axios.get('/api/post')
        .then(res => {
            this.props.addPosts(res.data)
        }).catch(err => {
            console.log(err)
            // TODO: handle this error <- need to retry
        })

        if(!this.props.self || !this.props.self.isAuthenticated) {
            axios.get('/api/user/profile')
            .then(res => {
                this.props.setSelf(res.data)
            })
            .catch(err => {
                this.props.setSelf({})
            })
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/privacy' component={Privacy} />
                        <Route exact path='/' render={() => (<Redirect to='/explore' />)} />
                        <Route path='/post/:postId' component={Post} />
                        <Route path='/user/:userId' component={Profile} />
                        <AuthenticatedRoute exact path='/notifications' component={Notifications} />
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