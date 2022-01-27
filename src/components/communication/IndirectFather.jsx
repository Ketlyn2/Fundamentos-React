import React, { useState } from 'react'
import IndirectSon from './IndirectSon'

export default (props) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [bool, setBool] = useState(false)

    function provideInfo(nameParam, ageParam, boolParam) {
        //console.log(nameParam, ageParam, boolParam)
        // name = nameParam
        // age = ageParam
        // bool = boolParam

        setName(nameParam)
        setAge(ageParam)
        setBool(boolParam)
    }

    return (
        <div>
            <div>
                <span>{ name } </span>
                <span><strong>{ age } </strong></span>
                <span>{bool ? 'Pai' : 'Padrasto'}</span>
            </div>
            <IndirectSon whenClick={provideInfo}></IndirectSon>
        </div>
    )
}