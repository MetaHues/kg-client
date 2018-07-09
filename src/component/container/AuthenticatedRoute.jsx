import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'

// This Routes the user to appropriate page if not logged in
// It also injects the current user data into the Authorized routes
class AuthenticatedRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            isLoading: true,
            user: null
        }
    }

    componentDidMount() {
        axios.get('/api/user/profile')
        .then(res => {
            if(!this.state.isLoggedIn) {
                this.setState({isLoggedIn: true, isLoading: false, user: res.data})
            }
        })
        .catch(err => {
            this.setState({isLoggedIn: false, isLoading: false})
            console.log(err)
        })
    }
    render() {
        const { component: Component, render, ...rest } = this.props
        // loading
        if(this.state.isLoading) {
            return (<div>Loading ...</div>)
        }
        // done loading but not logged in
        else if(!this.state.isLoading && !this.state.isLoggedIn) {
            return (<Redirect to='/login' />)
        }
        // loading and logged in

        if(Component) {
            console.log('component')
            return (<Route {...rest} render={(props)=>(<Component user={this.state.user} {...props} />)}/>)
        }
        console.log(render)
        return (
            <Route user={this.state.user} {...rest} render={render} />
        )
    }
}

export default AuthenticatedRoute