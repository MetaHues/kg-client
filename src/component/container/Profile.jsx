import React from 'react'
import { connect } from 'react-redux'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'
import ProfileHeader from '../partial/ProfileHeader'
import ProfileUserMessage from '../partial/ProfileUserMessage'

// style
import '../../css/Profile.css'

class Profile extends React.Component {
    render() {
        console.log(this.props)
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
                <section className='Profile_user-stats_container'>

                </section>
                <a href='/auth/logout'>
                    <button>Logout</button>
                </a>
                <NavigatorMobile />
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return { self: state.self }
}

export default connect(mapStateToProps)(Profile)