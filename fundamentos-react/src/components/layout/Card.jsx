import './Card.css'
import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="card">
            <div className="title">{ props.title }</div>
            <div className="content">{props.children}</div>
        </div>
    )
}