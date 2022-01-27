import React from 'react'

export default (props) => {
    return (
        <div>
            <span>{ props.name } tem </span>
            <span><strong>{ props.age } anos, </strong></span>
            <span>filho(a) { props.bool ? 'Verdadeiro(a)' : 'Adotivo(a)'}</span>
        </div>
    )
}