import React from 'react'
import get from 'lodash.get'

export default function ProfileUserMessage(props) {
    let name = get(props, ['self', 'name'])
    let msg = get(props, ['self', 'msg'])

    if(!name || !msg) {
        return null;
    }
    return (
        <div className='Profile_user-info_msg'>
            <div>{name}</div>
            <div>{msg}</div>
        </div>
    )
}