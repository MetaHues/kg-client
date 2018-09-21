import React from 'react'

// components
import Card from '../Card'


function PostList(props) {
    return (
        <div className = 'PostList'>
            {props.posts.map(post =>  {
                return <Card key={post._id} post={post} /> }).reverse()
            }
        </div>
    )
}

export default PostList