import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import get from 'lodash.get'

// styles
const Thumb = styled.img`
    height: calc(33.33vw - 4px);
    width: calc(33.33vw - 4px);
    object-fit: cover;
    overflow: hidden;
    box-sizing: border-box;

    @media (min-width: 700px) {
        height: calc(calc(calc(33.33vw*3) - 4vw)/3);
        width: calc(calc(calc(33.33vw*3) - 4vw)/3);
    }

    @media (min-width: 900px) {
        width: calc(calc(900px - 6vw)/3);
        height: calc(calc(900px - 6vw)/3);
    }
`

class PostGridTile extends Component {
    render() {
        let img = get(this.props, ['post', 'media', 'img'])
        if(!img) return null
        return (
            <Link to={`/post/${this.props.post._id}`}><Thumb src={this.props.post.media.img} alt='' /></Link>
        )
    }
}

export default PostGridTile