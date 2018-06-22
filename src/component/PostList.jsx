import React, { Component } from 'react'
import Card from './Card'
import Axios from 'axios'
import db from '../config/db'

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardList: null
        }
    }

    componentDidMount() {
        let url = 'localhost:3000'
        if(typeof process.env.API_URL) url = process.env.API_URL

        Axios.get(`${url}/post?userId=${this.props.match.params.userId}`)
        .then(posts => {
            console.log(posts)
            let cardList = posts.data.map(post =>  {return <Card key={post._id} postId={post._id} /> })
            this.setState({cardList: cardList})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className = 'PostList'>
                {this.state.cardList}
            </div>
        )
    }
}

export default PostList