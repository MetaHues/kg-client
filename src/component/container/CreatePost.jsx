import React, { Component } from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
            alert: (<div className='CreatePost__alert' />)
        }
    }

    submitPost = (e) => {
        e.preventDefault()

        if(this.previewImg.width === 0 || this.previewImg.height === 0) {
            this.imgInput.focus()
            this.setState({alert: <div className='CreatePost__alert'>Invalid Img: Please add url below. </div>})
            return
        }

        let newPost = {
            media: {
                img: this.imgInput.value
            },
            msg: this.msgInput.value,
            likes: 0,
            comments: [],
            userId: this.props.self
        }
        axios.post('/api/post', newPost)
        .then(res => {
            this.props.addPosts([res.data.post])
            this.props.setSelf(res.data.self)
            this.props.history.push(`/post/${res.data.post._id}`)
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
                <MobileHeader title={'New Post'} />
                <div className="CreatePost__container">
                    <div className="CreatePost__preview-img-container" onClick={this.selectImgInput.bind(this)}>
                        <i className='CreatePost__picture-icon fa fa-picture-o' />
                        <img ref={r => this.previewImg = r} src="" alt='' className="CreatePost__preview-img"/>
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addPosts: addPosts, setSelf: setSelf }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreatePost)