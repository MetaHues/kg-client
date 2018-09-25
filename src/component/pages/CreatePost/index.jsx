import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FormData from 'form-data'

// components
import NavigatorMobile from '../../shared/NavigatorMobile'
import MainHeader from '../../shared/MainHeader'

// actions
import addPosts from '../../../action/addPosts'
import setSelf from '../../../action/self'

// styles
import './style.css'

const ImageContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 500px;
    height: 100vw;
    max-height: 500px;
    position: relative;
    margin-bottom: 2rem;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ImageIcon = styled.i`
    color: #9e9e9e;
`

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: (<div className='CreatePost__alert' />),
            img: ''
        }
    }

    submitPost = (e) => {
        e.preventDefault()
        if(this.previewImg.width === 0 || this.previewImg.height === 0) {
            this.setState({alert: <div className='CreatePost__alert'>Invalid Img: Please add url below. </div>})
            return
        }
        let formData = new FormData()
        formData.append('imgUpload', this.state.imgUpload)
        formData.append('msg', this.msgInput.value)
        formData.append('likes', 0)
        formData.append('comments', '')
        formData.append('userId', this.props.self)

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

    selectImage(e) {
        e.preventDefault()
        console.log(this.fileInput.click())
    }

    render() {
        return (
            <div className='CreatePost'>
                <MainHeader title={'New Post'} />
                <div className="CreatePost__container">
                    <ImageContainer onClick={this.selectImage.bind(this)}>
                        <ImageIcon className='fa fa-5x fa-picture-o' />
                        <Image ref={r => this.previewImg = r} src={this.state.img} alt='' className="CreatePost__preview-img"/>
                    </ImageContainer>
                    <div className="CreatePost__input-container">
                        {this.state.alert}
                        <div className="CreatePost-input-container__input-row">
                            <div className="CreatePost-input-container__label-col">
                                <div>Upload Img</div>
                            </div>
                            <input className='CreatePost-input-container__input-col' ref={r => this.fileInput=r} type='file' accept='image/*' placeholder='file' onChange={this.setFile.bind(this)} />
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