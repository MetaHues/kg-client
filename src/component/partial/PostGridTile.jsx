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
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            imgUrl: null
        }
    }

    componentDidMount() {
        const {users, post} = this.props
        const imgUrl = get(this.props, 'post.media.img')

        if(users[post.userId]) {
            this.setState({user: users[post.userId], imgUrl: imgUrl})
        } else {
            axios.get(`/api/user/${this.props.post.userId}`)
            .then(userRes => {
                this.setState({user: userRes.data, imgUrl: imgUrl})
                this.props.addUser(userRes.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        if(!this.state.user || !this.state.imgUrl) { return null }
        return (
            <div className='PostGridTile'>
                <Link to={`/post/${this.props.post._id}`}>
                    <img src={this.state.imgUrl} alt='' />
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