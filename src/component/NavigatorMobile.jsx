import React, {Component} from 'react'

// style
import '../css/NavigatorMobile.css'

class NavigatorMobile extends Component {
    render() {
        return (
            <div className="NavigatorMobile">
                <nav>
                    <ul>
                        <a href=""><li><i className="fa fa-home"/></li></a>
                        <a href=""><li><i className="fa fa-search"/></li></a>
                        <a href=""><li><i className="fa fa-camera-retro"/></li></a>
                        <a href=""><li><i className="fa fa-diamond"/></li></a>
                        <a href=""><li><i className="fa fa-user-o"/></li></a>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavigatorMobile