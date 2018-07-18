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
                <header className='Profile__header'>
                    <div className='Profile__header--logo'>KittyGlitter</div>
                    <h1 className='Profile__header--title'> Profile </h1>
                    <button className='Profile__header--edit-button'>Edit</button>
                </header>
                <section className='Profile__user-info'>
                    <div className="Profile__user-info--container">
                        <img className='Profile__user-info--pic' src={this.props.self.img} alt='user' />
                        <div className='Profile__user-info--name'>{this.props.self.name}</div>
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