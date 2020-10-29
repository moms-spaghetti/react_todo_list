import React from 'react'

function List({ listData, handleClick }) {
    return (
        <ul>
            {listData.map((item, index) => {
                return (
                    <li key={index}>
                <button className='delete-button' onClick={() => {handleClick(index)}}>X</button> {item}
                </li>
                )
            })}
        </ul>
    )
}

export default List