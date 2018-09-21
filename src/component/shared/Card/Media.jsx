import React from 'react'

const CardMedia = ({post}) => {
    return (
        <div className="media">
            {post.media && post.media.img !== undefined &&
                <img src={post.media.img} alt="" />
            }
        </div>
    )
}

export default CardMedia