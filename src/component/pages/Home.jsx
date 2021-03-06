import React from 'react'
import { connect } from 'react-redux'

// components
import NavigatorMobile from '../shared/NavigatorMobile'
import MainHeader from '../shared/MainHeader'
import PostViewer from '../shared/PostViewer'

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