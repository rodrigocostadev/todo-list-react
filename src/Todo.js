import React, { useState } from "react";
import './Todo.css'
import List from "./List";

function Todo(){

    const [text, setText] = useState("")
    const [items, setItems] = useState([]) //items é um array vazio, (são os itens da lista)

    function handleChange(event){
        let t = event.target.value
        // console.log(t)
        // toda vez que eu digitar no campo de input, vai rodar essa função, por isso o estado da const text vai iniciar vazio
        setText(t)// aqui é como se text recebe-se o valor de setText(t) 
    }

    function addItem(event){
        // metodo Prevent default:
        event.preventDefault() //prevent default evita que ao digitar no campo de input, o texto digitado suma, pois sem o prevent.default ele
        // entende que estamos enviando os dados pro back end, então ele apaga. prevent.default evita que o texto digitado seja apagado

        if(text){ // esse if evita adicionar itens vazios
            setItems([...items,text])
            setText("")//limpa o valor do imput ao ser adicionado
        }
        
    }
    return( <div className="container" >

        <h1>Todo</h1>

        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem} >Add</button>
        </form>

        <List items={items}></List>
    
    </div>)
}



export default Todo