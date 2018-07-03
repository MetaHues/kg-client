import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

// import components
import Explore from './container/Explore'
import Post from './container/Post'
import UserPage from './container/UserPage'
import Login from './container/Login'


class App extends Component {
    constructor() {
        super()
        console.log('app constructor')
        this.state = {
            user : null
        }
    }

    componentDidMount() {

        axios.get('/me')
        .then(self => {
            console.log(self)
            this.setState({user: self})
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        console.log('rendering app')
        console.log(this.state)
        if(!this.state.user) {
            return (<div></div>)
        }
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/login' render={(props) => (<Login {...props} />)} />
                            <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
                            <Route exact path='/' render={() => (<Redirect to='/home' />)} />
                            <Route path='/post/:postId' render={(props) => (<Post {...props} />)} />
                            <Route path='/:userId' render={(props) => (<UserPage {...props} />)} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>      
        );
    }
}

export default App
