import React from 'react'

//components
import PostGridTile from './PostGridTile'

//styles
import '../../css/PostGrid.css'


function PostGrid(props) {
    return (
        <div className = 'PostGrid'>
            {props.posts.map( post => {
                return (<PostGridTile key={post._id} post={post}/>)
            })}
        </div>
    )
}

export default PostGrid