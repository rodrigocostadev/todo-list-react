import React, { useState } from "react";
import './Todo.css'

function Todo(){

    const [text, setText] = useState("")

    function handleChange(event){
        let t = event.target.value
        // console.log(t)
        // toda vez que eu digitar no campo de input, vai rodar essa função, por isso o estado da const text vai iniciar vazio
        setText(t)
    }
    return( <div className="container" >

        <h1>Todo</h1>

        <form>
            <input onChange={handleChange} type="text"></input>
            <button>Add</button>
        </form>

        <ul>
            <li>{text}</li>
        </ul>
    
    </div>)
}

export default Todo