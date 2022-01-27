import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    
    const random = parseInt(Math.random() * (props.max - props.min)) + props.min

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo:</strong> { props.min } </p>
            <p><strong>Valor Máximo:</strong> { props.max } </p>
            <p><strong>Valor Escolhido:</strong> { random }</p>
        </div>
    )
}