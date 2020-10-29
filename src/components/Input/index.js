import React from 'react'

function Input({handleChange}) {

    return <input id="todoInput" onKeyUp={
        event => handleChange(event)}/>
}

export default Input