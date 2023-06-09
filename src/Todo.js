import React, { useEffect, useState } from "react";
import List from "./components/List";
import Item from "./components/Item";
import TodoForm from "./components/TodoForm";
import './Todo.css'
import Year from "./components/Year";
import ReverseCounter from "./components/ReverseCounter";

const SAVED_ITEMS = "savedItems"

function Todo(){

    const [items, setItems] = useState([]) //items é um array vazio, (são os itens da lista)

    useEffect(() =>{
        let getItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))// .parse para transformar de string para obj JSON
        
        if(getItems){
            setItems(getItems)
        }
        console.log(getItems)
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
        // console.log(items)
        
    },[items])

    function onAddItem(text){ //Essa função serve para passar items do elemento filho (arquivo TODOFORM) para o elemento pai (arquivo TODO)
        let item = new Item(text)
        setItems([...items, item])//Spread operator para concatenar o novo item com os outros itens dentro do array
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

    function removeItem (){

        setItems("")
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
        // if(items){
        //     // items = ""
        //     console.log(items)
        // }
    }

    return(
    <div>
        <div className="container" >

            <h1>Minhas Metas Para <Year></Year></h1>
            <h3>Faltam <ReverseCounter></ReverseCounter> Dias </h3>
            <TodoForm onAddItem={onAddItem} removeItem={removeItem} items={items}></TodoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        
        </div>
        <div className="credits" >
            <p>Criado e Desenvolvido por <a target="blank" href="https://linktr.ee/rodrigocostadev">Rodrigo Costa</a></p>
        </div>

    </div>
    )
}





export default Todo