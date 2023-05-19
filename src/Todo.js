import React, { useState } from "react";
import './Todo.css'
import List from "./List";
import TodoForm from "./TodoForm";
import Item from "./Item";

function Todo(){
    const [items, setItems] = useState([]) //items é um array vazio, (são os itens da lista)

    function onAddItem(text){ //Essa função serve para passar items do elemento filho (arquivo TODOFORM) para o elemento pai (arquivo TODO)
        let it = new Item(text)
        setItems([...items,it])
    }        

    function onItemDeleted(item){
        let filteredItems = items.filter(it => it.id != item.id) //se o item que eu cliquei tiver o id diferente dos outros itens, vai apagar

        setItems(filteredItems) // atualiza os elementos, excluindo elementos apagados
    }

    return( <div className="container" >

        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem} ></TodoForm>
        <List onItemDeleted={onItemDeleted} items={items}></List>
    
    </div>)
}





export default Todo