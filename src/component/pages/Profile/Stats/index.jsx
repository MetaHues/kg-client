import React from 'react'

// styles
import './style.css'

export default function ProfileUserStats(props) {
    // TODO: use props from user
    return (
        <section className='user-stats'>
            <ul className='user-stats_list'>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">{props.counts.posts}</div>
                    <div className='user-stats_list-item_label'>posts</div>
                </li>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">{props.counts.followees}</div>
                    <div className='user-stats_list-item_label'>following</div>
                </li>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">{props.counts.followers}</div>
                    <div className='user-stats_list-item_label'>followers</div>
                </li>
            </ul>
        </section>
    )
}