import React, { useState, useEffect } from 'react';
import './input.css'

export const InputToDo = ({ todoValue, setTodoValue }) => {

    const [queryValue, setQueryValue] = useState("")

    const handleSubmit = (e) => {
        setQueryValue(e.target.value)
    }
    
    
    const handleChange = (e) => {

        e.preventDefault()
        
        if(queryValue.trim().length > 0) {
            setTodoValue( todoValue => [...todoValue, queryValue]  )
            setQueryValue("")
            
        }
        
    }
    


    return (

        <div>

                <form onSubmit={handleChange}>
                    <label>Input your ToDo's</label><br/><br/>
                    <input 
                        onChange={handleSubmit}
                        type="text"   
                        value={queryValue} 
                    />
                </form>

        </div>
    )
}
