import React from 'react'
import styled from 'styled-components'

//components
import PostGridTile from './PostGridTile'

//styles
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
`

function PostGrid(props) {
    let posts = props.posts.map( post => {return (<PostGridTile key={post._id} post={post}/>)}).reverse()
    return (
        <Grid>
            {posts}
        </Grid>
    )
}

export default PostGrid