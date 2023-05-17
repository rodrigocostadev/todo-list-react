import React, { useState } from "react";
import './Todo.css'
import List from "./List";
import TodoForm from "./TodoForm";

function Todo(){
    const [items, setItems] = useState([]) //items é um array vazio, (são os itens da lista)

    function onAddItem(item){ //Essa função serve para passar items do elemento filho (arquivo TODOFORM) para o elemento pai (arquivo TODO)
        setItems(...items,item)
    }        

    return( <div className="container" >

        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem} ></TodoForm>
        <List items={items}></List>
    
    </div>)
}





export default Todo