import React from 'react'

export default function ComParametro(props) {
    //forma para acessar um parametro, sempre usar props (propriedades de um componente)
    //propriedades são somente leitura
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const noteInt = Math.ceil(props.note)

    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong>{ props.name } </strong>
                tem nota <strong>{ noteInt } </strong>
                e está <strong>{ status }</strong>
            </p>
        </div>
    ) 
}