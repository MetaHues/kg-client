import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import get from 'lodash.get'

// components
import NavigatorMobile from '../../navigation/NavigatorMobile'
import ProfileUserMessage from './UserMessage'
import ProfileUserStats from './Stats'
import PostViewer from '../../shared/PostViewer'
import MainHeader from '../../shared/MainHeader'

// styles
import './style.css'

// actions
import addUser from '../../../action/users'

class Profile extends React.Component {
    
    renderProfileUserMessage(user) {
        let name = get(user, ['name'])
        let msg = get(user, ['msg'])
        if(!name || !msg) return null
        return <ProfileUserMessage msg={msg} name={name} />
    }

    renderProfileUserStats(user) {
        let counts = get(user, ['counts'])
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

        if(user !== undefined) {
            return user
        }

        axios.get(`/api/user/${userId}`)
        .then(userRes => {
            this.props.addUser(userRes.data)
        })
        .catch(err => {
            console.log(err)
        })
        return null
    }

    editProfile() {
        this.props.history.push('/EditProfile')
    }

    renderEditButton() {
        if(this.props.match.path !== '/profile') return null;
        return (
            <button className='profile_user-info_edit-button' onClick={this.editProfile.bind(this)}>Edit</button>
        )
    }

    renderLogoutButton() {
        if(this.props.match.path !== '/profile') return null;
        return (
            <button className='profile__button--logout'>                    
                <a href='/auth/logout'>Logout</a>
            </button>
        )
    }

    isSelf() {
        let userId = get(this.props, ['match', 'params', 'userId'])
        let selfId = get(this.props, ['self', '_id'])
        return userId === selfId
    }

    render() {
        if(this.isSelf()) return (<Redirect to='/profile' />)
        let user = this.getUser()
        if(user === null) {
            return null
        }
        return (
            <div className='profile'>
                <MainHeader title={'Profile'}/>
                <section className='profile_user-info'>
                    <div className='profile_user-info_container'>
                        <img className='profile_user-info-pic' src={user.img} alt='user' />
                        <div className='profile_user-info-right'>
                            <div className='profile_user-info_name'>{user.name}</div>
                            { this.renderEditButton() }
                            { this.renderLogoutButton() }
                        </div>
                        { this.renderProfileUserMessage(user) }
                        { this.renderProfileUserStats(user) }
                    </div>
                </section>
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
    return bindActionCreators({ addUser: addUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)