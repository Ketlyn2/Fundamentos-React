import React from 'react'

import First from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        {/* <Card title="Exemplo de Card"/> */}

        <Card title="#04 - Desafio valor aleatório">
            <Random min={1} max={31}></Random>
        </Card>

        <Card title="#03 - Fragmento">
            <Fragment></Fragment>
        </Card>

        <Card title="#02 - Com Parâmetro">
            <ComParametro
                title="Situação do Aluno"
                name="Daniel Santos"
                note={9.4} />
        </Card>

        <Card title="#01 - Primeiro Componente">
            <First></First>
        </Card>

        
        
        
    </div>

//função mais reduzida