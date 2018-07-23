import React from 'react'

// components
import MobileHeader from '../partial/MobileHeader'
import NavMobile from '../navigation/NavigatorMobile'

export default class Likes extends React.Component {

    goBack() {
        console.log('pop')
        console.log(this.props.history)
        this.props.history.goBack();
    }

    render() {
        let likeStyle = {
            display: 'flex',
            flexDirection: 'column'
        }

        let likesContainer = {
            height: 'calc(100vh - 33px - 45px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }

        let tempStyle = {
            fontSize: '2rem',
            display: 'inline-block',
            marginBottom: '2rem'
        }

        return (
            <div className='likes' style={likeStyle}>
                <MobileHeader title={'likes'} />
                <div className='likes-container' style={likesContainer}>
                    <div><h1 style={tempStyle}> <i className='fa fa-meh-o'/> Coming Soon...</h1></div>
                    <button onClick={this.goBack.bind(this)}>Go back</button>
                </div>
                <NavMobile />
            </div>
        )
    }
}