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
        this.state = {
            alert: (<div className='CreatePost__alert' />)
        }
    }

    submitPost = (e) => {
        e.preventDefault()

        if(this.previewImg.width === 0 || this.previewImg.height === 0) {
            this.imgInput.focus()
            this.setState({alert: <div className='alert text'>Invalid Img: Please add url below. </div>})
            return
        }

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
                        <h2>Add the url to the image below</h2>
                        {this.state.alert}
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