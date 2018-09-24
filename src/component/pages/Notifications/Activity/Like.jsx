import React from 'react'

// Components
import Activity from '.'
import TimePassed from '../../../shared/TimePassed'

const LikeActivity = ({user, post, like}) => {
    return (
        <Activity user={user} post={post}>
            {` liked your photo. `}
            <TimePassed createdAt={like.createdAt}/>
        </Activity>
    )
}
export default LikeActivity