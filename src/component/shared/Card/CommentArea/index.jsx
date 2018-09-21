import React, {Component} from 'react'

// components
import Comment from './Comment'

class CommentArea extends Component {
    renderUserCommentOnly() {
        return (
            <div className="comment-area section">
                <div className="comment-area__wrapper">
                    <Comment userName={this.props.user.name} userComment={this.props.post.msg} />
                </div>
            </div>
        )
    }

    renderComments() {
        let comments = this.props.comments.map(comment => {
            return (<li key={comment._id}><Comment  userName={comment.userName} userComment={comment.msg} /></li>)
        })
        return comments
    }

    render() {
        if(!this.props.post || !this.props.user) {
            return null
        }

        if(this.props.comments.length === 0) {
            return this.renderUserCommentOnly()
        }

        return (
            <div className="comment-area section">
                <div className="comment-area__wrapper">
                    <Comment userName={this.props.user.name} userComment={this.props.post.msg} />
                    <ol className="comment__list">
                        {this.renderComments()}
                    </ol>
                </div>
            </div>
        )
    }
}

export default CommentArea