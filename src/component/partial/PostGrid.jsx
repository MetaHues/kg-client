import React from 'react'

//components
import PostGridTile from './PostGridTile'

//styles
import '../../css/PostGrid.css'


function PostGrid(props) {
    let posts = props.posts.map( post => {return (<PostGridTile key={post._id} post={post}/>)})
    let orderedPosts = posts.sort((a, b) => {return new Date(a.createdAt) - new Date(b.createdAt)})
    return (
        <div className = 'PostGrid'>
            {orderedPosts}
        </div>
    )
}

export default PostGrid