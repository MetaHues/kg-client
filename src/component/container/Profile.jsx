import React from 'react'
import { connect } from 'react-redux'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'
import ProfileHeader from '../partial/ProfileHeader'
import ProfileUserMessage from '../partial/ProfileUserMessage'
import ProfileUserStats from '../partial/ProfileUserStats'
import PostViewer from './PostViewer'

// style
import '../../css/Profile.css'

class Profile extends React.Component {
    render() {
        return (
            <div className='Profile'>
                <ProfileHeader />
                <section className='Profile_user-info'>
                    <div className="Profile_user-info_container">
                        <img className='Profile_user-info_pic' src={this.props.self.img} alt='user' />
                        <div className='Profile_user-info_name'>{this.props.self.name}</div>
                    </div>
                    <ProfileUserMessage self={this.props.self} />
                </section>
                <ProfileUserStats />
                <PostViewer posts={this.props.posts} userIds={[this.props.self._id]} view={'GRID'} />
                <a href='/auth/logout'>
                    <button>Logout</button>
                </a>
                <NavigatorMobile />
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return { self: state.self, posts: state.posts }
}

export default connect(mapStateToProps)(Profile)