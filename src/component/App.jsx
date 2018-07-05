import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

// import components
import Explore from './container/Explore'
import Post from './container/Post'
import UserPage from './container/UserPage'
import Login from './container/Login'


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
        if(!this.state.user) {
            return (
                <div>
                    <Login ></Login>
                </div>
            )
        }
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/login' render={(props) => (<Login {...props} />)} />
                            <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
                            <Route exact path='/' render={() => (<Redirect to='/explore' />)} />
                            <Route exact path='/home' render={() => (<Redirect to='/user/home' />)} />
                            <Route path='/post/:postId' render={(props) => (<Post {...props} />)} />
                            <Route path='/user/:userId' render={(props) => (<UserPage {...props} />)} />
                            <Route render={()=>(<div>no route!</div>)} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>      
        );
    }
}

export default App
