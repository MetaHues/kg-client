import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// style
import '../../css/NavigatorMobile.css'

class NavigatorMobile extends Component {
    render() {
        return (
            <div className="NavigatorMobile">
                <nav>
                    <ul>
                        <Link to={'/home'}><li><i className='fa fa-home'/></li></Link>
                        <Link to={'/explore'}><li><i className='fa fa-search'/></li></Link>
                        <Link to={'/createpost'}><li><i className='fa fa-camera-retro'/></li></Link>
                        <Link to={'/likes'}><li><i className="fa fa-diamond"/></li></Link>
                        <Link to={'/profile'}><li><i className="fa fa-user-o"/></li></Link>                        
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavigatorMobile