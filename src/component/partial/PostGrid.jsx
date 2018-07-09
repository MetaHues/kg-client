import React, { Component } from 'react'

//components
import PostGridTile from './PostGridTile'

//styles
import '../../css/PostGrid.css'


function PostGrid(props) {
    return (
        <div className = 'PostGrid'>
            {props.posts.map( post => {
                return (<PostGridTile key={post._id} postId={post._id} />)
            })}
        </div>
    )
}

export default PostGrid