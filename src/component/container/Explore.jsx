import React, { Component } from 'react'

// components
import PostViewer from './PostViewer'
import Search from '../partial/Search'
import NavigatorMobile from '../navigation/NavigatorMobile'
import MainHeader from '../partial/MainHeader'

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