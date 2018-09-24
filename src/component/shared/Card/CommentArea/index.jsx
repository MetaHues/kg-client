import React, {Component} from 'react'
import styled from 'styled-components'

// Components
import Comment from './Comment'

// Styled
const Area = styled.div`
    padding: 0 1rem;
    @media (min-width: 500px) {
        font-size: 1.15rem;
    }
`

class CommentArea extends Component {
    renderUserCommentOnly() {
        return (
            <Area>
                <div className="comment-area__wrapper">
                    <Comment userName={this.props.user.name} userComment={this.props.post.msg} />
                </div>
            </Area>
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
            <Area>
                <div className="comment-area__wrapper">
                    <Comment userName={this.props.user.name} userComment={this.props.post.msg} />
                    <ol className="comment__list">
                        {this.renderComments()}
                    </ol>
                </div>
            </Area>
        )
    }
}

export default CommentArea