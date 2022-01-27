import './Counter.css'
import React from 'react'

export default class Counter extends React.Component {

    //'This' sempre aponta para uma instancia da propria classe

    incStyle = {
        backgroundColor: '#609ba8',
    }

    decStyle = {
        backgroundColor: '#b87333',
    }

    state = {
        number: this.props.numberInitial
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         number: props.numberInitial
    //     }
    
    // }


    // Dessa forma tambem dá, mas é muito javascript
    // constructor(props) {
    //     super(props)

    //     // 'This' realmente aponta para a instancia atual = this fixo
    //     this.inc = this.inc.bind(this)
    // }

    //Assim a função só funciona com o constructor acima, sem ele o 'this' do set state
    //não é reconhecido
    // inc() {
    //     this.setState({
    //         number: this.state.number + 1
    //     })
    // }

    //função arraw que adiciona + 1
    inc = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    //Componente baseado em classe, sempre precisa chamar as variaveis com um 'this' antes
    render() {
        return (
            <div>
                {/* <h3>Contador</h3> */}
                {/* <p>Valor Inicial: { this.props.numberInitial }</p> */}
                <p><strong>{ this.state.number }</strong></p>
                <div className="container-btn">
                    <button className="btn btn-c" style={this.incStyle} onClick={this.inc}>+</button>
                    <button className="btn btn-c" style={this.decStyle} onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }

}