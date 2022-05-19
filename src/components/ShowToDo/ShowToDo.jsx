import React, { useState, useEffect } from 'react';



export const ShowToDo = ({ todoValue }) => {

    console.log(todoValue)

    return (

        <div>

            <ul>
                
                {
                    todoValue.map( element => <li key={element}>{element}</li> )
                }
                
            </ul>

        </div>
        
    )
}
