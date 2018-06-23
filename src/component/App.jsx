import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// import components
import Navigator from './Navigator'
import Home from './Home'
import Post from './Post'
import UserPage from './UserPage'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navigator/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' render={() => (<Home view={'grid'}/>)} />
            <Route exact path='/' render={() => (<Redirect to='/home' />)} />
            <Route path='/post/:postId' render={(props) => (<Post {...props}/>)}/>
            <Route path='/:userId' render={(props) => (<UserPage {...props}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>      
    );
  }
}

export default App
