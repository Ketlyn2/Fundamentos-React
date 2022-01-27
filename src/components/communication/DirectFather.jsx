import React from 'react'
import DirectSon from './DirectSon'

export default (props) => {
    return (
        <div>
            <DirectSon name="Daniel" age={20} bool={true}/>
            <DirectSon name="Patricia" age={12} bool={false}/>
        </div>
    )
}