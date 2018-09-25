import React, { Component } from 'react'

// components
import PostViewer from '../shared/PostViewer'
import Search from '../shared/Search'
import NavigatorMobile from '../shared/NavigatorMobile'
import MainHeader from '../shared/MainHeader'

class Explore extends Component {
    render() {
        return ( 
            <div className = 'Explore'>
                <MainHeader title={'Explore'}/>
                <Search />
                <PostViewer view={'GRID'} />
                <NavigatorMobile/>
            </div>
        )
    }
}

export default Explore