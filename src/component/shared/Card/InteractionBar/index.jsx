import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'
import styled from 'styled-components'

// Actions
import replacePost from '../../../../action/replacePost'
import addPosts from '../../../../action/addPosts'

// Components
import HeartButton from './HeartButton'
import TimePassed from '../../TimePassed'

// Styled
const Row = styled.div`
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: 100;
    color: #4e4e4e;
    @media (min-width: 500px) {
        font-size: 1.5rem;
    }
`

const LikeCount = styled.span`
    margin-left: .5rem;
`

const TimeContainer = styled.div`
    margin-left: auto;
`

class CardInteractionBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            loading: false,
            data: undefined,
            isLiked: false,
        }
    }

    addLikesToPage(like) {
        let updatedLikes = this.state.data.concat([like])
        this.setState({data: updatedLikes, isLiked: true})
    }

    removeLikesFromPage() {
        let updatedPost = Object.assign({}, this.props.post)
        updatedPost.likeCount -= 1
        this.props.addPosts([updatedPost])

        let updatedLikes = this.state.data.filter(like => {
            return like.userId !== this.props.self._id
        })
        this.setState({data: updatedLikes, isLiked: false})
    }

    getLikes() {
        if(this.state.loaded || this.state.loading) return
        this.setState({loading: true})
        Axios.get(`/api/like/${this.props.post._id}`)
        .then(res => {
            let isLiked = false
            for(let i = 0; i < res.data.length; i++) {
                let userLike = res.data[i]
                if(userLike.userId === this.props.self._id) {
                    isLiked = true
                    break
                }
            }
            this.setState({data: res.data, isLiked})
            return
        }).catch(err => {
            this.setState({loading: false})
            this.getLikes()
            console.log(err)
        })
    }

    toggleLike() {
        if(this.state.isLiked) {
            console.log('remove like')
            Axios.delete(`/api/like/${this.props.post._id}`)
            .then(res => {
                this.removeLikesFromPage()
                this.props.replacePost(this.props.post, res.data.post)
            })
            .catch(err => {
                console.log(err)
                // need to display error in some way
            })
        } else {
            Axios.post(`/api/like/${this.props.post._id}`, {})
            .then(res => {
                this.addLikesToPage(res.data.like)
                this.props.replacePost(this.props.post, res.data.post)
            })
            .catch(err => {
                console.log('add like err returned', err)
                // need to display error in some way
            })
        }
    }

    componentDidMount() {
        this.getLikes()
    }

    render() {
        return(
            <div>
                <Row>
                    <a className="like_button" onClick={this.toggleLike.bind(this)}>
                        <HeartButton isFilled={this.state.isLiked}/>
                    </a>
                    <LikeCount>{this.props.post.likeCount} Likes</LikeCount>
                    <TimeContainer>
                        <TimePassed createdAt={this.props.post.createdAt}/>
                    </TimeContainer>
                </Row>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ replacePost, addPosts }, dispatch)
}

export default connect(null, mapDispatchToProps)(CardInteractionBar)

