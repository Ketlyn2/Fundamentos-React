import React from 'react'

export default (props) => { 

    const generateAge = () => parseInt(Math.random() * (70 - 50)) + 50

    //recebe informações do componente pai (indirect father)
    function receiveInfo(e) {
        props.whenClick('João', generateAge, true)
    }

    return (
        <div>
            <div>Filho</div>
            <button onClick={receiveInfo}>Fornecer Informações</button>
        </div>
    )
}