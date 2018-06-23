import React, { Component } from 'react'

//components
import PostGridTile from './PostGridTile'

//styles
import '../css/PostGrid.css'

class PostGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
            PostGridTiles : null
        }
    }

    componentDidMount() {
        let postGridTiles = this.props.posts.map( post => {
            return (<PostGridTile key={post._id} postId={post._id} />)
        })

        this.setState({PostGridTiles : postGridTiles})
    }

    render() {
        return (
            <div className = 'PostGrid'>
                {this.state.PostGridTiles}
            </div>
        )
    }
}

export default PostGrid