import React from 'react'
import styled from 'styled-components'

// Components
import Card from '../Card'

// Styles
const Container = styled.div`
    @media (min-width: 700px) {
        width: 700px;
        margin: 0 auto;
    }
`

function PostList(props) {
    return (
        <Container>
            {props.posts.map(post =>  {
                return <Card key={post._id} post={post} /> }).reverse()
            }
        </Container>
    )
}

export default PostList