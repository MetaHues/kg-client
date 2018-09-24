import React from 'react'
import styled from 'styled-components'

// Styled
const PostImage = styled.img`
    width: 100%;
    max-height: 125vw;
    min-height: 50vw;
    object-fit: contain;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;

    @media(min-width: 700px) {
        width: 700px;
        max-height: calc(700px * 1.25);
        min-height: calc(700px / 2);
    }
`

const CardMedia = ({post}) => {
    return (
        <div className="media">
            {post.media && post.media.img !== undefined &&
                <PostImage src={post.media.img} alt="" />
            }
        </div>
    )
}

export default CardMedia