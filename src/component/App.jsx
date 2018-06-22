import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Post from './Post'
import PostList from './PostList'
import Navigator from './Navigator'
import Home from './Home'

class App extends Component {
  render() {
    //let kitty = this.props.kitty;
    return (
      <div className="App">
        {/* <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={Home} />

          </Switch>
        </BrowserRouter> */}

        <Navigator/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={Home} />

            <Route exact path='/' render={() => (<Redirect to='/5b28b24100616c081b67260e' />)} />
            <Route path='/post/:postId' render={(props) => (<Post {...props}/>)}/>
            <Route path='/:userId' render={(props) => (<PostList {...props}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>      
    );
  }
}

export default App
