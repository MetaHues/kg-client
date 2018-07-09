import React from 'react'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        }
    }

    render (){
        return (
            <div>
                <h1> Profile </h1>
                <header>
                    <img src={this.props.user.img} alt='picture of user' />
                    <div>
                        {this.props.user.name}
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

export default Profile