import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// actions
import setSelf from '../../action/self'

// This Routes the user to appropriate page if not logged in
// It also injects the current user data into the Authorized routes
class AuthenticatedRoute extends React.Component {

    componentDidMount() {
        if(!this.props.self || !this.props.self.name) {
            axios.get('/api/user/profile')
            .then(res => {
                let self = res.data
                self.statusText = res.statusText
                this.props.setSelf(self)
            })
            .catch(err => {
                let self = {status: err.response.statusText}
                this.props.setSelf(self)
            })
        }
    }
    
    render() {
        console.log(this.props)
        const { self, component: Component, render, ...rest } = this.props

        // Loading
        let isLoading = !self
        if(isLoading) {
            return (<div>Loading ...</div>)
        }

        // Not logged in
        let isAuthorized = (self.status !== 'NOT_AUTHORIZED')
        console.log('isauth', isAuthorized)

        if(!isAuthorized) {
            return (<Redirect to='/login' />)
        }

        if(Component) {
            return (<Route {...rest} render={(props)=>(<Component {...props} />)}/>)
        }
        return (
            // TODO: check if this gets self as prop
            <Route {...rest} render={render} />
        )
    }
}

const mapStateToProps = (state) => {
    return { self: state.self }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setSelf: setSelf }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute)