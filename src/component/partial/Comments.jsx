import React from 'react'

function Comments(props) {
    if(!props.msg) return (<div className='comments' />)
    return (
        <div className="section comments">
            <ol>
                <li><strong>{props.userName} </strong>{props.msg}</li>
            </ol>
        </div>
    )
}

export default Comments