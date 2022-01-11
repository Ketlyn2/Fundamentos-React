import React from 'react'

export default function Fragment(props) {
    //sempre retornar o valor envolvendo com uma tag:
    return (
        // <div>
        //     <h2>Fragmento</h2>
        //     <p>Cuidado com esse erro!</p>
        // </div>

        //ou desta forma:

        // <React.Fragment>
        //     <h2>Fragmento</h2>
        //     <p>Cuidado com esse erro!</p>
        // </React.Fragment>

        //ou desta forma:

        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}