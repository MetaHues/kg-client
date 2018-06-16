import React, { Component } from 'react'
import Post from './Post'
import Navigator from './Navigator'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const user = {
	"_id" : "5b21b3f3418a3903acb098ed",
	"posts" : [ ],
	"friends" : [ ],
	"name" : "Hello Kitty",
	"profileImg" : "https://placekitten.com/500/500",
	"__v" : 0
}

const post = {
  "_id" : "5b21b4f92b56b003cb6f08cd",
  "likes" : 42,
  "postText" : "This is my kitty, there are many like it, but this is my kitty and i will defend it with my life because this kitty is mine and i am it's",
	"userId" : "5b21b3f3418a3903acb098ed",
	"mediaUrl" : "https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDYvMTQvMjAvNDgvMzQvMTM3L2NocmFjdGVyX2hlbGxvX2tpdHR5LmpwZyJdXQ/chracter-hello-kitty.jpg?sha=f5e7c272d3fc6e78",
	"comments" : [ ],
	"__v" : 0
}

class App extends Component {
  render() {
    //let kitty = this.props.kitty;
    return (
      <div className="App">
        <Navigator/>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' render={() => (<Card user={user} post={post} />)}/> */}
            <Route path='/post/:postid' render={() => (<Post user={user} post={post}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>      
    );
  }
}

export default App
