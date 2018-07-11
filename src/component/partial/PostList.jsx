import React from 'react'

// components
import Card from './Card'


function PostList(props) {
    return (
        <div className = 'PostList'>
            {props.posts.map(post =>  {
                return <Card key={post._id} postId={post._id} /> })
            }
        </div>
    )
}

export default PostList