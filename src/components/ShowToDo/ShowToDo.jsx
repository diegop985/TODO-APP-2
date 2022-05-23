import React, { useState, useEffect } from 'react';
import { DeleteButton } from '../DeteleEntry/DeleteButton';
import './showtodo.css'



export const ShowToDo = ({ todoValue, setTodoValue }) => {




    return (

        <div className='container'>

            <ul>
                
                {
                    todoValue.map( (element, index) => {
                        return (

                            <li key={index}>
                            <p>{element}</p>
                            <DeleteButton 
                            index={index} 
                            todoValue={todoValue} 
                            setTodoValue={setTodoValue}
                                
                            /> 
                            </li> 
                        ) 
                    })
                }
               
            </ul>

        </div>
        
    )
}
