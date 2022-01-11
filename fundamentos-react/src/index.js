import './index.css' 
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'

const el = document.getElementById('root') //js puro

//comando que renderiza uma string no site ('mensagem', lugar que será apresentada)
//ReactDOM.render('Olá React!!', el) 

//Usando sintaxe JSX - parecida com HTML
//JSX faz a conversão de HTML para React/JavaScript
//Trabalhar sintaxes HTML dentro de um contexto JavaScript

//ReactDOM.render(
//       <div><strong>Olá React!!</strong></div>,
//        el
//    ) 

// const tag = <strong>Olá React!!</strong>

// ReactDOM.render(
//     //Para chamar constantes dentro JSX é preciso por entre  {}
//     <div>{ tag }</div>, 
//     el 
// )

// ----- Primeiro Projeto --------------
//Criando componentes
ReactDOM.render(
   <App></App>,
    el
)


