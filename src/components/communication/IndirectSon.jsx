import React from 'react'

export default (props) => { 

    const generateAge = () => parseInt(Math.random() * (70 - 50)) + 50
    const generateBool = () => Math.random() > 0.5

    const btnStyle = {
        backgroundColor: '#ffb2c1'
    }

    //recebe informações do componente pai (indirect father)
    function receiveInfo(e) {
        props.whenClick('João', generateAge(), generateBool() )
    }

    return (
        <div>
            {/* <div>Filho</div> */}
            <button className="btn" style={btnStyle}  onClick={receiveInfo}>Fornecer Informações</button>
        </div>
    )
}