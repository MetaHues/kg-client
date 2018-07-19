import React from 'react'

// styles
import '../../css/ProfileUserStats.css'

export default function ProfileUserStats() {
    // TODO: use props from user
    return (
        <section className='user-stats'>
            <ul className='user-stats_list'>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">100</div>
                    <div className='user-stats_list-item_label'>posts</div>
                </li>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">100</div>
                    <div className='user-stats_list-item_label'>following</div>
                </li>
                <li className='user-stats_list-item'>
                    <div className="user-stats_list-item_stat">100</div>
                    <div className='user-stats_list-item_label'>followers</div>
                </li>
            </ul>
        </section>
    )
}