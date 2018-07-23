import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import get from 'lodash.get'

// style
import '../../css/PostGridTile.css'

// actions
import addUser from '../../action/users'

class PostGridTile extends Component {

    componentDidMount() {

        // let user = users[post.userId]
        // if(user === undefined) {
        //     console.log(`loading ${post.userId}`)
        //     this.props.addUser({ _id:post.userId, status: 'PENDING'}) // user parent element to navigate this prior to loading
        //     axios.get(`/api/user/${post.userId}`)
        //     .then(userRes => {
        //         // TODO: take care of api case user not found null will be sent back if user not found
        //         user = Object.assign({}, userRes.data)
        //         user.status = 'SUCCESS'
        //         this.props.addUser(userRes.data)
        //     })
        //     .catch(err => {
        //         console.log(this.props.post, err)
        //     })
        // }
    }

    render() {
        let img = get(this.props, ['post', 'media', 'img'])
        if(!img) return null
        return (
            <div className='PostGridTile'>
                <Link to={`/post/${this.props.post._id}`}>
                    <img src={this.props.post.media.img} alt='' />
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addUser: addUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostGridTile)