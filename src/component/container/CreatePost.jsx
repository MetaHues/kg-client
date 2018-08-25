import React, { Component } from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FormData from 'form-data'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'
import MobileHeader from '../partial/MobileHeader'

// styles
import '../../css/CreatePost.css'

// actions
import addPosts from '../../action/posts'
import setSelf from '../../action/self'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.setImgUrl = this.setImgUrl.bind(this)
        this.focusImgInput = this.selectImgInput.bind(this)
        this.state = {
            alert: (<div className='CreatePost__alert' />),
            img: ''
        }
    }

    submitPost = (e) => {
        e.preventDefault()

        if(this.previewImg.width === 0 || this.previewImg.height === 0) {
            this.imgInput.focus()
            this.setState({alert: <div className='CreatePost__alert'>Invalid Img: Please add url below. </div>})
            return
        }
        let formData = new FormData()
        formData.append('imgUpload', this.state.imgUpload)
        formData.append('msg', this.msgInput.value)
        formData.append('likes', 0)
        formData.append('comments', '')
        formData.append('userId', this.props.self)

        // let newPost = {
        //     img: this.state.img,
        //     imgUpload: this.state.imgUpload,
        //     msg: this.msgInput.value,
        //     likes: 0,
        //     comments: [],
        //     userId: this.props.self
        // }
        const headers = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post('/api/post', formData, headers)
        .then(res => {
            console.log(res.data)
            this.props.addPosts([res.data.post])
            this.props.setSelf(res.data.self)
            this.props.history.push(`/post/${res.data.post._id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    setImgUrl() {
        this.setState({img: this.imgInput.value}) 
    }

    selectImgInput() {
        this.imgInput.focus()
    }

    setFile() {
        let file = this.fileInput.files[0]
        let fr = new FileReader()
        fr.onload = (e) => {
            this.setState({img: fr.result, imgUpload: file})
        }
        fr.onerror = () => {
            console.log(fr.error)
        }
        fr.readAsDataURL(file)
        console.log(file)
    }

    render() {
        return (
            <div className='CreatePost'>
                <MobileHeader title={'New Post'} />
                <div className="CreatePost__container">
                    <div className="CreatePost__preview-img-container" onClick={this.selectImgInput.bind(this)}>
                        <i className='CreatePost__picture-icon fa fa-picture-o' />
                        <img ref={r => this.previewImg = r} src={this.state.img} alt='' className="CreatePost__preview-img"/>
                    </div>
                    <div className="CreatePost__input-container">
                        <h2 className='CreatePost-input-container__title'>
                            <div>Add the url to the image below</div>
                        </h2>
                        {this.state.alert}
                        <div className="CreatePost-input-container__input-row">
                            <div className="CreatePost-input-container__label-col">
                                <div>Image Url</div>
                            </div>
                            <input className='CreatePost-input-container__input-col' ref={r => this.imgInput=r} type='text' placeholder='Image URL' onChange={this.setImgUrl.bind(this)} />
                        </div>
                        <div className="CreatePost-input-container__input-row">
                            <div className="CreatePost-input-container__label-col">
                                <div>Upload Img</div>
                            </div>
                            <input className='CreatePost-input-container__input-col' ref={r => this.fileInput=r} type='file' placeholder='file' onChange={this.setFile.bind(this)} />
                        </div>
                        <div className="CreatePost-input-container__input-row">
                            <div className="CreatePost-input-container__label-col">
                                <div>Comment</div>
                            </div>
                            <input className='CreatePost-input-container__input-col' ref={r => this.msgInput=r} type='text' placeholder='Write a comment...' />
                        </div>
                    </div>
                    <button type='submit' onClick={this.submitPost} >Submit</button>
                </div>
                <NavigatorMobile/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addPosts: addPosts, setSelf: setSelf }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreatePost)