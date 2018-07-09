import React, { Component } from 'react'
import axios from 'axios'

class CreatePost extends Component {
    SubmitPost = (e) => {
        e.preventDefault()

        let newPost = {
            media: {
                img: document.querySelector('#post_img').value
            },
            msg: document.querySelector('#post_comment').value,
            likes: 0,
            comments: []
        }
        axios.post('/api/post', newPost)
        .then((res) => {
            this.props.history.push(`/post/${res.data._id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className='CreatePost'>
                <form action='/api/post' method='post'>
                    <input type='text' id='post_img' name='post_img' placeholder='Image URL' />
                    <input type='text' id='post_comment' name='post_comment' placeholder='Comment' />
                    <button type='button' onClick={this.SubmitPost} >Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePost