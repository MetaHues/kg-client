import React from 'react'

function Comment(props) {
    if(!props.userName || !props.userComment) return (null)
    return (
        <div className="comment">
            <strong>{props.userName} </strong>{props.userComment}
        </div>
    )
}
export default Comment