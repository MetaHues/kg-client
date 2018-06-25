import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// import components
import NavigatorMobile from './navigation/NavigatorMobile'
import Explore from './container/Explore'
import Post from './container/Post'
import UserPage from './container/UserPage'
import Login from './container/Login'

class App extends Component {
  render() {
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
