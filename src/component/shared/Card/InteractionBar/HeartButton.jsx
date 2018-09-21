import React from 'react'


const renderHeart = (isFilled) => {
    if(isFilled) return <i className="fa fa-heart"/>
    else return <i className="fa fa-heart-o"/>
}

const HeartButton = ({isFilled}) => {
    return (
        renderHeart(isFilled)
    )   
}

export default HeartButton