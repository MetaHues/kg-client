import React from 'react'
import styled from 'styled-components'

// Styled
const Message = styled.p`
    display: flex;
    flex: 1;
`

export default function ProfileUserMessage({msg}) {
    if(!msg) return null
    return (
        <Message>{msg}</Message>
    )
}