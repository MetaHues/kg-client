import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import setSelf from '../../action/self'

// components
import MobileHeader from '../partial/MobileHeader'
import NavMobile from '../navigation/NavigatorMobile'

// style
import '../../css/EditProfile.css'

class EditProfile extends React.Component {

    submitEdit() {

    }

    render() {
        return (
            <div className='edit-profile' >
                <MobileHeader title={'Edit Profile'}/>
                <section className='profile_user-info'>
                    <div className='profile_user-info_container'>
                        <img className='profile_user-info-pic' src={this.props.self.img} alt='user' />
                        <div className='profile_user-info-right'>
                            <div className='profile_user-info_name'>{this.props.self.name}</div>
                        </div>
                    </div>
                </section>
                <section className='edit-profile_form'>
                    <h2 className='edit-profile_form_bio-label edit-profile_label'>Bio</h2>
                    <textarea className='edit-profile_form_bio-input edit-profile_input' rows={2} value={this.props.self.msg} />
                    <button className='edit-profile_submit-button' onclick={this.submitEdit.bind(this)}>Submit</button>
                </section>
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