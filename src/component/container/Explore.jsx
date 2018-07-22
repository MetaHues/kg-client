import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// components
import PostViewer from './PostViewer'
import Search from '../partial/Search'
import NavigatorMobile from '../navigation/NavigatorMobile'
import MobileHeader from '../partial/MobileHeader'

class Explore extends Component {
    render() {
        return ( 
            <div className = 'Explore'>
                <MobileHeader title={'Explore'}/>
                <Search />
                <PostViewer view={'GRID'} />
                <NavigatorMobile/>
            </div>
        )
    }
}

export default Explore