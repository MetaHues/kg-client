import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class CreatePost extends Component {
    componentDidMount() {
        console.dir(this.props)
        const { history } = this.props
        console.log()
        document.querySelector('#post_submit').onclick = function() {
            let newPost = {
                media: {
                    img: document.querySelector('#post_img').value
                },
                msg: document.querySelector('#post_comment').value,
                likes: 0,
                comments: []
            }
            console.log(newPost)
            console.log(document.querySelector('#post_img'))
            axios.post('/api/post', newPost)
            .then((res) => {
                console.log('res')
                console.log(res)
                history.push(`/post/${res.data._id}`)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        return (
            <div className='CreatePost'>
                <input type='text' id='post_img' name='post_img' placeholder='Image URL' />
                <input type='text' id='post_comment' name='post_comment' placeholder='Comment' />
                <button id='post_submit'>Submit</button>
            </div>
        )
    }
}

export default CreatePost