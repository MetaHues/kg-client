import React, { Component } from 'react'
import axios from 'axios'

// components
import PostList from '../partial/PostList'
import NavigatorMobile from '../navigation/NavigatorMobile'

class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = { PostList : null }
        console.log(props)
    }

    componentDidMount() {
        let userId = ""
        if(this.props.user) userId = this.props.user._id
        else userId = this.props.match.params.userId;

        axios.get(`/api/post?userId=${userId}`)
        .then(posts => {
            let postList = <PostList posts={posts.data} />
            this.setState({PostList : postList})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className = 'UserPage'>
                {this.state.PostList}
                <NavigatorMobile/>
            </div>
        )
    }
}

export default UserPage