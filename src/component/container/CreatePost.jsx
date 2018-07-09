import React, { Component } from 'react'
import axiom from 'axiom'

class CreatePost extends Component {
    componentDidMount() {
        const msg = document.querySelector('#post_img').value

        // document.querySelector('#post_submit').onclick = () = {
        //     axiom.post('/api/post', {
        //         userId: this.state.user._id,
        //         msg: String,
        //         media: {
        //             img: String,
        //             video: String,
        //         },
        //         likes: Number,
        //         comments: [{user: ObjectId, comment: String}]
        //     })
        // }
    }

    render() {
        return (
            <div className='CreatePost'>
                <input type='text' id='post_img' name='post_img' placeholder='Image URL' />
                <input type='text' id='post_comment' name='post_comment' placeholder='Comment' />
                <button id='post_submit'>Submit</button>
            </div>
        )
    }
}

export default CreatePost