import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

// import components
import Explore from './container/Explore'
import Post from './container/Post'
import UserPage from './container/UserPage'
import Login from './container/Login'
import AuthenticatedRoute from './container/AuthenticatedRoute'
import Profile from './container/Profile'
import CreatePost from './container/CreatePost'


class App extends Component {
    constructor() {
        super()
        this.state = {
            user : null
        }
    }

    componentDidMount() {
        // get current user
        axios.get('/api/user/profile')
        .then(res => {
            this.setState({user: res.data})
            console.log('user set in app')
        })
        .catch(err => {
            this.setState({user: undefined})
            console.log(err)
        })
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
                    <Route exact path='/' render={() => (<Redirect to='/explore' />)} />
                    <Route path='/post/:postId' component={Post} />
                    <Route path='/user/:userId' component={UserPage} />
                    <AuthenticatedRoute exact path='/createpost' component={CreatePost} />
                    <AuthenticatedRoute exact path='/home' component={UserPage} />
                    <AuthenticatedRoute exact path='/profile' component={Profile} />
                    <Route render={()=>(<div>no route!</div>)} />
                </Switch>
            </div>      
        );
    }
}

export default App
