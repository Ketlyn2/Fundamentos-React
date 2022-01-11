import React from 'react'

import First from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        <Random min={1} max={100}></Random>
        <Fragment></Fragment>
        <ComParametro
            title="Situação do Aluno"
            name="Daniel Santos"
            note={9.4} />
        <First></First>
    </div>

//função mais reduzida