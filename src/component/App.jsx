import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

// import components
import Explore from './container/Explore'
import Post from './container/Post'
import UserPage from './container/UserPage'
import Login from './container/Login'
import AuthenticateUserRedirect from './container/AuthenticateUserRedirect'
import Profile from './container/Profile'


class App extends Component {
    constructor() {
        super()
        this.state = {
            user : null
        }
    }

    componentDidMount() {
        axios.get('/api/user/profile')
        .then(res => {
            this.setState({user: res.data})
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
                    <Route exact path='/login' render={(props) => (<Login {...props} />)} />
                    <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
                    <Route exact path='/' render={() => (<Redirect to='/explore' />)} />
                    <Route path='/post/:postId' render={(props) => (<Post {...props} />)} />
                    <Route path='/user/:userId' render={(props) => (<UserPage {...props} />)} />
                    <Route exact path='/home' render={(props) => (
                        <div>
                            <AuthenticateUserRedirect />
                            <UserPage user={this.state.user} {...props} />
                        </div>
                    )} />
                    <Route exact path='/profile' render={(props) => (
                        <AuthenticateUserRedirect >                        
                            <Profile {...props} />
                        </AuthenticateUserRedirect>                        
                    )} />
                    <Route render={()=>(<div>no route!</div>)} />
                </Switch>
            </div>      
        );
    }
}

export default App
