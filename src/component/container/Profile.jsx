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
        let name = get(this.props, ['self', 'name'])
        let msg = get(this.props, ['self', 'msg'])
        msg = 'hello world'
        console.log('profile', this.props)
        if(!name || !msg) return null
        return <ProfileUserMessage msg={msg} name={name} />
    }

    renderProfileUserStats() {
        let counts = get(this.props, ['self', 'counts'])
        if(!counts) return null
        else return <ProfileUserStats counts={counts}/>
    }

    render() {

        return (
            <div className='Profile'>
                <ProfileHeader />
                <section className='Profile_user-info'>
                    <div className="Profile_user-info_container">
                        <img className='Profile_user-info_pic' src={this.props.self.img} alt='user' />
                        <div className='Profile_user-info_name'>{this.props.self.name}</div>
                    </div>
                    <div className="Profile_user-info_container">
                        { this.renderProfileUserMessage()}
                    </div>
                </section>
                { this.renderProfileUserStats() }
                <PostViewer posts={this.props.posts} userIds={[this.props.self._id]} view={'GRID'} />
                <NavigatorMobile />
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return { self: state.self, posts: state.posts }
}

export default connect(mapStateToProps)(Profile)