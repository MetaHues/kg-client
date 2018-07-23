import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Axios from 'axios'

// actions
import setSelf from '../../action/self'

class FollowButton extends React.Component {
    // add or remove from friends
    toggleFollow() {
        let toggleFollow = {
            userId: this.props.userId
        }
        Axios.post('/api/user/friend', toggleFollow)
                .then(res => {
                    // the button needs to know who your friends are
                    this.props.setSelf(res.data)
                })
                .catch(err => {
                    console.log('addFriend err', err)
                })
    }

    render() {
        // show when authenticated, and not your own post
        if(!this.props.self || !this.props.self.isAuthenticated || this.props.self._id === this.props.userId) return <div className="kard_follow-user-button"/>
        // if friend show 'unfollow' if not friend show 'follow
        let isFriend = this.props.self.friends.includes(this.props.userId)
        if(isFriend) {
            return (
                <button className='kard_follow-user-button kard_follow-user-button_grey' onClick={this.toggleFollow.bind(this)}>
                    unfollow
                </button>
            )        
        } else {
            return (
                <button className='kard_follow-user-button' onClick={this.toggleFollow.bind(this)}>
                    follow
                </button>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setSelf: setSelf}, dispatch)
}

const mapStateToProps = (state) => {
    return { self: state.self }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)
