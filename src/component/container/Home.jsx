import React from 'react'
import { connect } from 'react-redux'

// components
import NavigatorMobile from '../navigation/NavigatorMobile'
import MainHeader from '../partial/MainHeader'
import PostViewer from './PostViewer'

// style
import '../../css/Profile.css'

class Home extends React.Component {
    render() {
        if(!this.props.posts || !this.props.self) return (null)
        return (
            <div className='Home'>
                <MainHeader title={'Friends'}/>
                <PostViewer includeUsers={this.props.self.friends.concat([this.props.self._id])} view={'LIST'} />
                <NavigatorMobile />
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return { posts: state.posts, self: state.self }
}

export default connect(mapStateToProps)(Home)