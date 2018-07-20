import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Axios from 'axios'

// actions
import setSelf from '../../action/self'

class FollowButton extends React.Component {
    constructor(props) {
        super(props)
        this.buttonText = 'follow'
    }
    addFriend() {
        let friend = {
            userId: this.state.user._id
        }
        Axios.post('/api/user/friend', friend)
                .then(res => {
                    console.log(res)
                    // the button needs to know who your friends are
                    console.log('addfriendreturn', res.data.self)
                    this.props.setSelf(res.data.self)
                })
                .catch(err => {
                    console.log('addFriend err', err)
                })
    }

    renderButton() {
        console.log('Followbutton', this.props)
        if(!this.props.self) return <div className="kard_follow-user-button"/>
        
        let isFriend = this.props.self.friends.includes(this.props.userId)
        if(isFriend) {
            return (
                <button className='kard_follow-user-button' onClick={this.addFriend.bind(this)}>
                    Unfollow
                </button>
            )
        } else {
            return (
                <button className='kard_follow-user-button' onClick={this.addFriend.bind(this)}>
                    Follow
                </button>
            )
        }
    }

    render() {
        console.log('follow button props', this.props)
        return this.renderButton()
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setSelf: setSelf}, dispatch)
}

const mapStateToProps = (state) => {
    return { self: state.self }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)
