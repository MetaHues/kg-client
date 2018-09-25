import React from 'react'
import styled from 'styled-components'

// Styled
const RedColor = styled.span`
    color: tomato;
`

const renderHeart = (isFilled) => {
    if(isFilled) return <RedColor><i className="fa fa-heart"/></RedColor>
    else return <i className="fa fa-heart-o"/>
}

const HeartButton = ({isFilled}) => {
    return (
        renderHeart(isFilled)
    )   
}

export default HeartButton