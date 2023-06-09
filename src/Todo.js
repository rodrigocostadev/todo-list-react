import React, { useState } from "react";
import './Todo.css'
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";

function Todo(){
    const [items, setItems] = useState([]) //items é um array vazio, (são os itens da lista)

    function onAddItem(text){ //Essa função serve para passar items do elemento filho (arquivo TODOFORM) para o elemento pai (arquivo TODO)
        let it = new Item(text)
        setItems([...items,it])//Spread operator para concatenar o novo item com os outros itens dentro do array
    }        

    function onItemDeleted(item){ //essa função vai filtrar os elementos que ainda não foram clicados, vai criar um array com eles, 
        // e com base nisso, vai excluir os elementos clicados, atualizando o estado do array de itens principal, veja melhor abaixo:

        let filteredItems = items.filter(it => it.id != item.id) //se o item que eu cliquei tiver o id diferente dos outros itens, vai apagar.
        // vai filtrar os itens que forem diferentes dos que eu cliquei. it são os itens dentro do meu array de ITEMS (tarefas), 
        // o item.id é o item que eu cliquei.
        
        // console.log(filteredItems)
        setItems(filteredItems) // atualiza os elementos, excluindo elementos apagados
    }

    function onDone(item){  
        let updatedItems = items.map(it => { //vai gerar um novo array
            if(it.id === item.id){ // item.id é o item que eu cliquei, o it é cada item do array
                it.done = !it.done // se for igual vai mudar o done, vai receber o contrario dele
            }
            return it //retorna o item "modificado"
        })

        setItems(updatedItems) //atualiza o estado com os itens que foram "modificados"
    }

    return( <div className="container" >

        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem} ></TodoForm>
        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
    
    </div>)
}





export default Todo