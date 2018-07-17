import React, { Component } from 'react'
import axios from 'axios'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'

// styles
import '../../css/CreatePost.css'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.setImgUrl = this.setImgUrl.bind(this)
        this.focusImgInput = this.selectImgInput.bind(this)
    }

    submitPost = (e) => {
        e.preventDefault()

        console.log(this.props)
        let newPost = {
            media: {
                img: this.imgInput.value
            },
            msg: this.msgInput.value,
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
        this.previewImg.src = this.imgInput.value
    }

    selectImgInput() {
        this.imgInput.focus()
    }

    render() {
        return (
            <div className='CreatePost'>
                <h1 className='CreatePost__title'>Post a picture</h1>
                <div className="CreatePost__container">
                    <div className="CreatePost__preview-img-container" onClick={this.selectImgInput.bind(this)}>
                        <i className='CreatePost__picture-icon fa fa-picture-o' />
                        <img ref={ref => this.previewImg = ref} src="" alt='' className="CreatePost__preview-img"/>
                    </div>
                    <form action='/api/post' method='post'>
                        <input ref={r => this.imgInput=r} type='text' placeholder='Image URL' onChange={this.setImgUrl.bind(this)} />
                        <input ref={r => this.msgInput=r} type='text' placeholder='Comment' />
                        <button type='submit' onClick={this.submitPost} >Submit</button>
                    </form>
                </div>
                <NavigatorMobile/>
            </div>
        )
    }
}

export default CreatePost