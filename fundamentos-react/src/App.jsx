import './App.css'
import React from 'react'

import First from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div className="app">
        <h1>Fundamentos React (Arrow)</h1>
        {/* <Card title="Exemplo de Card"/> */}

        <div className="cards">
            <Card title="#04 - Desafio valor aleatório" color="#9B72AA">
                <Random min={1} max={31}></Random>
            </Card>

            <Card title="#03 - Fragmento" color="#57837B">
                <Fragment></Fragment>
            </Card>

            <Card title="#02 - Com Parâmetro" color="#DF711B">
                <ComParametro
                    title="Situação do Aluno"
                    name="Daniel Santos"
                    note={9.4} />
            </Card>

            <Card title="#01 - Primeiro Componente" color="#B85C38">
                <First></First>
            </Card>
        </div>
    </div>

//função mais reduzida