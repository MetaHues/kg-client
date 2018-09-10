import React, {Component} from 'react'

// components
import Comment from './Comment'

class CommentArea extends Component {
    constructor(props) {
        super(props)
    }

    renderComments() {
        let comments = this.props.comments.map(comment => {
            return (<li key={comment._id}><Comment  userName={comment.userName} userComment={comment.msg} /></li>)
        })
        return comments
    }

    render() {
        if(!this.props.post || !this.props.user || this.props.comments.length === 0) return null
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