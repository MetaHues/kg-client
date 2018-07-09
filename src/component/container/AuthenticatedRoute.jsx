import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'

class AuthenticatedRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    componentDidMount() {
        axios.get('/api/user/profile')
        .then(res => {
            if(!this.state.isLoggedIn) this.setState({isLoggedIn: true})
        })
        .catch(err => {
            this.setState({isLoggedIn: false})
            console.log(err)
        })
    }
    render() {
        const { component: Component, render, ...rest } = this.props
        if(!this.state.isLoggedIn) {
            return (<Redirect to='/login' />)
        }
        return (
            <Route {...rest} render={render} />
        )
    }
}

export default AuthenticatedRoute