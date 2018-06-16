import React, { Component } from 'react'
import Card from './Card'
import Axios from 'axios'


class Post extends Component {
    constructor(props) {
        super()
        this.state = {user: props.user, post: null}
        Axios.get('http://localhost:3000/post')
        .then(res => {
            console.log(res.data)
            this.setState({post: res.data[0]})
        })
        .catch(err => {
            console.log(err)
        })
    }

 

    render() {
        return (
            <div className='Post'>
                <Card user={this.state.user} post={this.state.post}/>
            </div>
        )
    }
}

export default Post