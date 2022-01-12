import './App.css'
import React from 'react'

import First from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from  './components/basics/FamilyMember'
import ListStudents from './components/repetition/ListStudents'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div className="app">
        <h1>Fundamentos React (Arrow)</h1>
        {/* <Card title="Exemplo de Card"/> */}

        <div className="cards">
            <Card title="#06 - Repetição" color="#557C55">
                <ListStudents></ListStudents>
            </Card>

            <Card title="#05 - Componente com Filhos" color="#FE7E6D">
                <Family lastName="Hidalgo">
                    <FamilyMember name="Daniel"/>
                    <FamilyMember name="Chloe"/>
                    <FamilyMember name="Ketlyn"/>
                </Family>
            </Card>

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