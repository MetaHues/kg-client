import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'
import ProfileHeader from '../partial/ProfileHeader'
import ProfileUserMessage from '../partial/ProfileUserMessage'
import ProfileUserStats from '../partial/ProfileUserStats'
import PostViewer from './PostViewer'
import get from 'lodash.get'

// styles
import '../../css/Profile.css'

// actions
import addUser from '../../action/users'
import setSelf from '../../action/self'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: null,
            user: null
        }
    }

    renderProfileUserMessage() {
        let name = get(this.props, ['user', 'name'])
        let msg = get(this.props, ['user', 'msg'])
        if(!name || !msg) return null
        return <ProfileUserMessage msg={msg} name={name} />
    }

    renderProfileUserStats() {
        let counts = get(this.props, ['user', 'counts'])
        if(!counts) return null
        else return <ProfileUserStats counts={counts}/>
    }

    // get the user
    getUser() {
        if(this.props.match.path === '/profile') {
            if (this.props.self === undefined) {
                return null
            } else {
                return this.props.self
            }
        }

        let userId = this.props.match.params.userId
        let user = this.props.users[userId]
        console.log('user', user)
        if(user !== undefined) {
            return user
        }

        axios.get(`/api/user/${userId}`)
        .then(userRes => {
            console.log('adding user')
            this.props.addUser(userRes.data)
        })
        .catch(err => {
            console.log(err)
        })
        return null
    }

    render() {
        let user = this.getUser()
        if(user === null) {
            return null
        }
        return (
            <div className='Profile'>
                <ProfileHeader />
                <section className='Profile_user-info'>
                    <div className="Profile_user-info_container">
                        <img className='Profile_user-info_pic' src={user.img} alt='user' />
                        <div className='Profile_user-info_name'>{user.name}</div>
                    </div>
                    <div className="Profile_user-info_container">
                        { this.renderProfileUserMessage()}
                    </div>
                </section>
                { this.renderProfileUserStats() }
                <PostViewer posts={this.props.posts} includeUsers={[user._id]} view={'GRID'} />
                <NavigatorMobile />
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts, 
        self: state.self, 
        users: state.users 
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setSelf: setSelf, addUser: addUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)