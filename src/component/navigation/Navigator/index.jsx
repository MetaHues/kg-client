import React, {Component} from 'react'

// style
import '../../css/Navigator.css'

class Navigator extends Component {
    render() {
        return (
            <div className="Navigator">
                <nav>
                    <div className="logo">
                    <a href=""><span className='logo-small'><i className="fa fa-diamond"/> | KG</span><span className='logo-large'> KittyGlitter</span></a></div>
                    <div className="search-large">
                        <div className="searchBoarder">
                            <i className="fa fa-search"/>
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="subnav">
                        <ul>
                            <a href=""><li><i className="fa fa-coffee"/></li></a>
                            <a href=""><li><i className="fa fa-heart-o"/></li></a>
                            <a href=""><li><i className="fa fa-user-o"/></li></a>
                        </ul>
                    </div>
                </nav>
                <div className="search-small">
                    <div className="searchBoarder">
                        <i className="fa fa-search"/>
                        <input type="text" placeholder=" Search"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigator