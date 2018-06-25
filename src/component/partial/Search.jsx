import React, { Component } from 'react'

//style
import '../../css/Search.css'

class Search extends Component {
    render() {
        return (
            <div className="Search">
                <div className="searchBoarder">
                    <i className="fa fa-search"/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
        )
    }
}

export default Search