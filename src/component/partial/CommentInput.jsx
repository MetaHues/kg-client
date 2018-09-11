import React, { Component } from 'react'
import axios from 'axios'

// styles
import '../../css/CommentInput.css'

class CommentInput extends Component {
    sendComment() {
        const comment = {
            postId: this.props.post._id,
            msg: this.commentInput.value
        }
        axios.post(`/api/comment/`, comment)
        .then(res => {
            this.props.addComments(res.data, this.props.parent)
            this.clearInput()
        }).catch(err => {
            console.log(err)
        })
    }

    clearInput() {
        this.commentInput.value = ""
    }

    render() {
        return (
            <div className="comment-input section">
                <input 
                    className="comment-input__input" 
                    ref={r => this.commentInput = r} 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Join the conversation"
                />
                <button 
                    className="comment-input__button" 
                    onClick={this.sendComment.bind(this)}
                >Send</button>
            </div> 
        )
    }
}
export default CommentInput