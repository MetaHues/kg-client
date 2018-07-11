import React from 'react'
import { connect } from 'react-redux'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1> Profile </h1>
                <header>
                    <img src={this.props.self.img} alt='user' />
                    <div>
                        {this.props.self.name}
                    </div>
                </header>
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