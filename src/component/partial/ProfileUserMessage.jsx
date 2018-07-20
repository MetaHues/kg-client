import React from 'react'

// style
import '../../css/ProfileUserMessage.css'

export default function ProfileUserMessage(props) {
    console.log(props)
    return (
        <div className='Profile_user-info_msg-container'>
            <div className='Profile_user-info_msg-name'>{props.name}</div>
            <div className='Profile_user-info_msg-msg'>{props.msg}</div>
        </div>
    )
}