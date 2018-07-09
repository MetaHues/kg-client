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
                    <Route exact path='/login' render={props => (<Login {...props} />)} />
                    <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
                    <Route exact path='/' render={() => (<Redirect to='/explore' />)} />
                    <Route path='/post/:postId' render={props => (<Post {...props} />)} />
                    <Route path='/user/:userId' render={props => (<UserPage {...props} />)} />
                    <AuthenticatedRoute exact path='/createpost' render={props => (<CreatePost {...props} />)} />
                    <AuthenticatedRoute exact path='/home' render={props => (<UserPage {...props} user={this.state.user} />)} />
                    {/* <AuthenticatedRoute exact path='/profile' render={props => (<Profile user={this.state.user} {...props } />)} /> */}
                    <AuthenticatedRoute exact path='/profile' component={Profile} />
                    <Route render={()=>(<div>no route!</div>)} />
                </Switch>
            </div>      
        );
    }
}

export default App
