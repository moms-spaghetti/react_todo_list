import React from 'react'

function Button({id, handleClick}) {
    return <button id={id} onMouseUp={handleClick}>Add todo</button>
}

export default Button