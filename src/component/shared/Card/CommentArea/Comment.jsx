import React from 'react'
import styled from 'styled-components'

// Styled
const UserComment = styled.span`
    font-weight: 100;
    margin-left: .5rem;
    color: #2e2e2e;
`
const Bold = styled.span`
    font-weight: 400;
`

const Container = styled.div`
    white-space: pre-wrap;      /* CSS3 */   
    white-space: -moz-pre-wrap; /* Firefox */    
    white-space: -pre-wrap;     /* Opera <7 */   
    white-space: -o-pre-wrap;   /* Opera 7 */    
    word-wrap: break-word;      /* IE */
`

function Comment(props) {
    if(!props.userName || !props.userComment) return (null)
    return (
        <Container>
            <Bold>{props.userName}</Bold><UserComment>{props.userComment}</UserComment>
        </Container>
    )
}
export default Comment