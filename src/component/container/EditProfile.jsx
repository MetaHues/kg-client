import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// actions
import setSelf from '../../action/self'

// components
import MobileHeader from '../partial/MobileHeader'
import NavMobile from '../navigation/NavigatorMobile'

// style
import '../../css/EditProfile.css'

class EditProfile extends React.Component {
    submitEdit() {
        console.log(this.msg.value)
        axios.put('/api/user/profile', {msg: this.msg.value})
        .then(res => {
            console.log('setself', res.data.self)
            this.props.setSelf(res.data.self)
            this.props.history.push('/profile')
        })
        // likely will want to handle this by showing an error and allowing resubmittal
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div className='edit-profile' >
                <MobileHeader title={'Edit Profile'}/>
                <div className="edit-profile_container">
                    <section className='edit-profile_user-info'>
                        <div className='edit-profile_user-info_container'>
                            <div className="edit-profile_col-left">
                                <img className='edit-profile_user-info-pic' src={this.props.self.img} alt='user' />
                            </div>
                            <div className='edit-profile_user-info_name .edit-profile_col-right'>{this.props.self.name}</div>
                        </div>
                    </section>
                    <section className='edit-profile_form'>
                        <h2 className='edit-profile_form_bio-label edit-profile_label edit-profile_col-left'>Bio</h2>
                        <textarea ref={r => this.msg = r} className='edit-profile_form_bio-input edit-profile_input edit-profile_col-right' rows={2} defaultValue={this.props.self.msg} />
                    </section>
                    <button className='edit-profile_submit-button' onClick={this.submitEdit.bind(this)}>Submit</button>
                </div>
                <NavMobile />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setSelf: setSelf }, dispatch)
}

const mapStateToProps = state => {
    return { self: state.self }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)