import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import axios from 'axios'
import get from 'lodash.get'

// actions
import addUser from '../../../action/users'

// components
import NavigatorMobile from '../../shared/NavigatorMobile'
import UserMessage from './UserMessage'
import ProfileUserStats from './Stats'
import PostViewer from '../../shared/PostViewer'
import MainHeader from '../../shared/MainHeader'

// styles
// import './style.css'
const UserProfilePic = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 50%;
    margin: 1rem;
    @media (min-width: 500px) {
        width: 150px;
        height: 150px;
        margin: 2rem;
    }

    @media (min-width: 700px) {
        width: 200px;
        height: 200px;
        margin: 3rem;
    }
`

const Row = styled.div`
    display: flex;
    max-width: 900px;
    margin: 0 auto;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%    
    align-self: center;
    padding-right: 1rem;
    @media (min-width: 900px) {
        padding-right: 0;
    }
`

const UserName = styled.h1`
    font-size: 2rem;
    font-weight: 100;
    text-transform: capitalize;
    margin-bottom: .5rem;
`

const EditButton = styled.button`
    width: 100%;
    padding: .5rem;
    border: 1px solid #efefef;
    margin-bottom: 1.5rem;
`

const LogoutButton = styled.button`
    align-self: flex-end;
    padding: .5rem;
    border: 1px solid tomato;
    align-self: center;
`

const MessageArea = styled.div`
    display: flex;
    padding-bottom: 1rem;
`

class Profile extends React.Component {

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
            <EditButton onClick={this.editProfile.bind(this)}>Edit</EditButton>
        )
    }

    renderLogoutButton() {
        if(this.props.match.path !== '/profile') return null;
        return (
            <LogoutButton className='profile__button--logout'>                    
                <a href='/auth/logout'>Logout</a>
            </LogoutButton>
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
            <div>
                <MainHeader title={'Profile'}/>
                <Row >
                    <UserProfilePic src={user.img} alt='user' />
                    <Column>
                        <UserName>{user.name}</UserName>
                        { this.renderEditButton() }
                        <MessageArea>
                            <UserMessage msg={user.msg}/>
                            { this.renderLogoutButton() }
                        </MessageArea>
                    </Column>

                </Row>
                <ProfileUserStats user={user}/>
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