import React from 'react'
import styled from 'styled-components'

// styles
import './style.css'
const Container = styled.section`
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    margin-bottom: 2rem;
`

export default function ProfileUserStats({user}) {
    if(!user) return <div></div>
    const {counts} = user
    if(!counts) return <div></div>
    return (
        <Container>
            <ul className='user-stats_list'>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">{counts.posts}</div>
                    <div className='user-stats_list-item_label'>posts</div>
                </li>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">{counts.followees}</div>
                    <div className='user-stats_list-item_label'>following</div>
                </li>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">{counts.followers}</div>
                    <div className='user-stats_list-item_label'>followers</div>
                </li>
            </ul>
        </Container>
    )
}