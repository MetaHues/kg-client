import React from 'react'
import { connect } from 'react-redux'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'

// style
import '../../css/Profile.css'

class Profile extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className='Profile'>
                <header className='Profile_header'>
                    <div className='Profile_header_logo'>KittyGlitter</div>
                    <h1 className='Profile_header_title'> Profile </h1>
                    <button className='Profile_header_edit-button'>Edit</button>
                </header>
                <section className='Profile_user-info'>
                    <div className="Profile_user-info_container">
                        <img className='Profile_user-info_pic' src={this.props.self.img} alt='user' />
                        <div className='Profile_user-info_name'>{this.props.self.name}</div>
                    </div>
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