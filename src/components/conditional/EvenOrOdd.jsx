import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const isEven = props.number % 2 === 0

    return (
        <div>
            { props.number } <span>é </span>{ isEven ? <span>Par</span> : <span>Ímpar</span> }
        </div>
    )

}