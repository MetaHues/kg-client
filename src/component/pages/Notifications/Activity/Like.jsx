import React from 'react'
import styled from 'styled-components'

// Components
import Activity from '.'
import TimePassed from '../TimePassed'

const LikeActivity = ({user, post, like}) => {
    return (
        <Activity user={user} post={post}>
            {` liked your photo. `}
            <TimePassed createdAt={like.createdAt}/>
        </Activity>
    )
}
export default LikeActivity