import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

// style
import '../../css/NavigatorMobile.css'

class NavigatorMobile extends Component {
    render() {
        return (
            <div className="NavigatorMobile">
                <nav>
                    <ul>
                        <Link to={"/home"}><li><i className="fa fa-home"/></li></Link>
                        <Link to={"/explore"}><li><i className="fa fa-search"/></li></Link>
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