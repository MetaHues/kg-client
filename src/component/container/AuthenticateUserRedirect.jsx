import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class AuthenticateUserRedirect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    componentDidMount() {
        axios.get('/api/user/profile')
        .then(res => {
            this.setState({isLoggedIn: true})
        })
        .catch(err => {
            this.setState({isLoggedIn: false})
            console.log(err)
        })
    }
    render() {
        console.log(this.props)
        console.log(this.state.isLoggedIn)
        if(this.state.isLoggedIn) {
            return (
                <div className='AuthenticateUserRedirect'>
                </div>
            )
        }
        return (
            <Redirect to='/login' />
        )
    }
}

export default AuthenticateUserRedirect