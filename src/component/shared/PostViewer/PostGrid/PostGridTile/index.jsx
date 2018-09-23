import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import get from 'lodash.get'

// styles
import './style.css'

const Thumb = styled.img`
    height: 33.33vw;
    width: 33.33vw;
    object-fit: cover;
    overflow: hidden;
    box-sizing: border-box;
    padding: 2px;

    @media (min-width: 700px) {    
        padding: 5%;
    }

    @media (min-width: 900px) {
        box-sizing: border-box;
        width: 300px;
        height: 300px;
    }
}
`

class PostGridTile extends Component {
    render() {
        let img = get(this.props, ['post', 'media', 'img'])
        if(!img) return null
        return (
            <Link to={`/post/${this.props.post._id}`}>
                <Thumb src={this.props.post.media.img} alt='' />
            </Link>
        )
    }
}

export default PostGridTile