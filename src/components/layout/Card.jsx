import './Card.css'
import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const cardStyle = {
        borderColor: props.color || '#C84B31'
    }

    const titleStyle = {
        backgroundColor: props.color || '#C84B31'
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="title" style={titleStyle}>{ props.title }</div>
            <div className="content">{props.children}</div>
        </div>
    )
}