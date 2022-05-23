import React, { useState, useEffect } from 'react';
import { InputToDo } from '../../components/InputToDo/InputToDo'
import { ShowToDo } from '../../components/ShowToDo/ShowToDo';
import './todoapp.css'


export const ToDoApp = () => {

    const [todoValue, setTodoValue] = useState([])


    useEffect(() => {

        let values = localStorage.getItem("todo-values")

        if(values) {

            setTodoValue( todoValue => [...values.split(",")] )
        }
        
    }, [])
    

    useEffect(() => {
          
        localStorage.setItem("todo-values", todoValue)

    })
    


    return (

        <div className='todoapp'>
            <h1>ToDoApp</h1>
            <InputToDo todoValue={todoValue} setTodoValue={setTodoValue}/>
            <ShowToDo todoValue={todoValue} setTodoValue={setTodoValue}/>
        </div>
    )
}
