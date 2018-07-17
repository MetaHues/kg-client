import React, { Component } from 'react'
import axios from 'axios'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'

// styles
import '../../css/CreatePost.css'

class CreatePost extends Component {


    submitPost = (e) => {
        e.preventDefault()
        console.log(this.props)
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

    setImgUrl() {
        let src = document.querySelector('#post_img').value
        let img = document.querySelector('.CreatePost__preview-img')
        console.log('img', img)
        img.src = src
    }

    render() {
        return (
            <div className='CreatePost'>
                <div className="CreatePost__container">
                    <h1 className='CreatePost__title'>Post a picture</h1>
                    <div className="CreatePost__preview-img-container">
                        <img src="" alt="" className="CreatePost__preview-img"/>
                    </div>
                    <form action='/api/post' method='post'>
                        <input type='text' id='post_img' name='post_img' placeholder='Image URL' onChange={this.setImgUrl} />
                        <input type='text' id='post_comment' name='post_comment' placeholder='Comment' />
                        <button type='button' onClick={this.submitPost} >Submit</button>
                    </form>
                </div>
                <NavigatorMobile/>
            </div>
        )
    }
}

export default CreatePost