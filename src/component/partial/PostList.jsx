import React from 'react'

// components
import Card from './Card'


function PostList(props) {
    console.log('posts', props.posts, 'user', props.user)
    console.log('filter', props.posts.filter(post => { post.userId == props.user._id }))
    if(!props.users) {
        return (
            <div className = 'PostList'>
                {/* {props.posts.map(post =>  {
                    return <Card key={post._id} postId={post._id} post={post} user={props.user}/> })
                } */}

                {
                }
            </div>
        )
    }
    return (
        <div className = 'PostList'>
            {props.posts.map(post =>  {
                return <Card key={post._id} postId={post._id} post={post} /> })
            }
        </div>
    )
}

export default PostList