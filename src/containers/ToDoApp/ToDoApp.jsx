import React, { useState, useEffect } from 'react';
import { InputToDo } from '../../components/InputToDo/InputToDo'
import { ShowToDo } from '../../components/ShowToDo/ShowToDo';
import './todoapp.css'


export const ToDoApp = () => {

    const [todoValue, setTodoValue] = useState([])
    return (

        <div className='todoapp'>
            <h1>ToDoApp</h1>
            <InputToDo setTodoValue={setTodoValue}/>
            <ShowToDo todoValue={todoValue}/>
        </div>
    )
}
