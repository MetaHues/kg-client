import React from 'react'

// Components
import Activity from '.'
import TimePassed from '../../../shared/TimePassed'

const CommentActivity = ({user, post, comment}) => {
    return (
        <Activity user={user} post={post}>
            {` commented: ${comment.msg} `}
            <TimePassed createdAt={comment.createdAt}/>
        </Activity>
    )
}
export default CommentActivity