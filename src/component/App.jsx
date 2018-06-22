import React, { Component } from 'react'
import Post from './Post'
import PostList from './PostList'
import Navigator from './Navigator'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    //let kitty = this.props.kitty;
    return (
      <div className="App">
        <Navigator/>
        <BrowserRouter>
          <Switch>
            <Route path='/post/:postId' render={(props) => (<Post {...props}/>)}/>
            <Route path='/:userId' render={(props) => (<PostList {...props}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>      
    );
  }
}

export default App
