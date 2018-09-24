import React from 'react'
import styled from 'styled-components'

//components
import PostGridTile from './PostGridTile'

//styles
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2px;
    grid-column-gap: 2px;

    @media (min-width: 700px) {
        grid-gap: 2vw;
        grid-column-gap: 2vw;
    }

    @media (min-width: 900px) {
        grid-gap: 3vw;
        grid-column-gap: 3vw;
    }
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