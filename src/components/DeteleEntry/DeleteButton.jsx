import React, { useState, useEffect } from 'react';



export const DeleteButton = ({index, todoValue, setTodoValue}) => {

    const handleDelete = () => {

        setTodoValue(todoValue.filter( (item, key) => {

            return key !== index
        }))



    }

    

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
