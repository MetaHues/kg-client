import React from 'react'
import { connect } from 'react-redux'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'
import ProfileHeader from '../partial/ProfileHeader'
import ProfileUserMessage from '../partial/ProfileUserMessage'
import ProfileUserStats from '../partial/ProfileUserStats'
import PostViewer from './PostViewer'
import get from 'lodash.get'

// style
import '../../css/Profile.css'

class Profile extends React.Component {
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

    render() {
        return (
            <div className='Profile'>
                <ProfileHeader />
                <section className='Profile_user-info'>
                    <div className="Profile_user-info_container">
                        <img className='Profile_user-info_pic' src={this.props.user.img} alt='user' />
                        <div className='Profile_user-info_name'>{this.props.user.name}</div>
                    </div>
                    <div className="Profile_user-info_container">
                        { this.renderProfileUserMessage()}
                    </div>
                </section>
                { this.renderProfileUserStats() }
                <PostViewer posts={this.props.posts} includeUsers={[this.props.user._id]} view={'GRID'} />
                <NavigatorMobile />
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(Profile)