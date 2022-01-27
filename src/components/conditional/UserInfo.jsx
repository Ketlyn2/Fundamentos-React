import React from 'react'
import If, { Else } from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const user = props.user  || {}

    return (
        <div>
            <If test={user && user.name}>
                <div>Seja bem vindo <strong>{ user.name }</strong> !</div>
                <Else>
                    Seja bem vindo amigo!
                </Else>
            </If>
        </div>
    )

}