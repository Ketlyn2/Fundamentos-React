import './Input.css'
import React, {useState} from 'react'

export default (props) => {

    const [value, setValue] = useState('Inicial')

    function whenChange(e) {
        setValue(e.target.value)
        //console.log(e)
    }

    return (
        <div className="container">
            <div>
                {/* Componente controlavel */}
                <input value={value}  onChange={whenChange}/>
                <p><strong>Resposta:</strong> { value }</p>
            </div>
            {/* Componente apenas para leitura, não da para digitar */}
            <div><input value={value}  readOnly/></div>

            {/* Componente incontrolavel */}
            <input value={undefined}/>
        </div>    
    )
}