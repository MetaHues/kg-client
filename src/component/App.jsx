import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// import components
import Navigator from './navigation/Navigator'
import NavigatorMobile from './navigation/NavigatorMobile'
import Explore from './page/Explore'
import Post from './page/Post'
import UserPage from './page/UserPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/explore' render={() => (<Explore view={'grid'} />)} />
            <Route exact path='/' render={() => (<Redirect to='/home' />)} />
            <Route path='/post/:postId' render={(props) => (<Post {...props} />)} />
            <Route path='/:userId' render={(props) => (<UserPage {...props} />)} />
          </Switch>
        </BrowserRouter>
        <NavigatorMobile/>
      </div>      
    );
  }
}

export default App
