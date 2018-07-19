import React from 'react'

// components
import Card from './Card'


function PostList(props) {
    console.log('posts', props.posts)
    return (
        <div className = 'PostList'>
            {props.posts.map(post =>  {
                return <Card key={post._id} postId={post._id} post={post} /> })
            }
        </div>
    )
}

export default PostList