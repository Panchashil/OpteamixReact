import React from 'react'
import CompTwo from './CompTwo'

const CompOne = (props) => {
    return (
        <>
            <h3>This is Component one</h3>
            <p>My Name is :<strong>{props.name}</strong></p>
            <hr/>
            <CompTwo name123={props.name}></CompTwo>
        </>
    )
}

export default CompOne
