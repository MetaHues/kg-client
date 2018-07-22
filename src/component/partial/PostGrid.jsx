import React from 'react'

//components
import PostGridTile from './PostGridTile'

//styles
import '../../css/PostGrid.css'


function PostGrid(props) {
    let posts = props.posts.map( post => {return (<PostGridTile key={post._id} post={post}/>)}).reverse()
    return (
        <div className = 'PostGrid'>
            {posts}
        </div>
    )
}

export default PostGrid