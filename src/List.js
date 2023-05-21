import React from "react";

function DoneImg(props){
    if(props.done){
        return(<img alt="done" src="./assets/on.png" ></img>)        
    }else{
        return(<img alt="undone" src="./assets/off.png" ></img>)
    }
}

function List(props){

    // function deleteItem(item){
    //     console.log(item)
    // }

    return(
        <ul>
            {props.items.map(item => 
            <li className={item.done ? "done" : ""} key={item.id} >
                {item.text}
                <button onClick={() =>{props.onDone(item)}} ><DoneImg done={item.done} ></DoneImg></button>
                <button onClick={() =>{props.onItemDeleted(item)}} ><img src="./assets/trash-bin.png" ></img></button>
            </li>)
            } 
        </ul>
    )
    
    // EXPLICANDO TAREFA CONCLUIDA, O DONE:
    // por estado inicial done sempre vai ser falso, isso é visto no arquivo item.js
    // mas na linha:
    // <li className={item.done ? "done" : ""} key={item.id} >
    // mas se o botão de tarefa concluida for clicada, done vai se tornar verdadeiro como é visto na function onDone do arquivo Todo.js.
    // então se done for verdadeiro, a classe do <li> vai receber done, então vai mudar o estado da tarefa que foi clicada, 
    // alterando a imagem "para verde, de concluido" e sublinhando a terefa, isso é visto no arquivo Todo.css :
    // .done{ text-decoration: line-through; }
    // ao clicar novamente na imagem, vai mudar o nome da classe para vazio " ", alterando o estado que era visto anteriormente
    
}

export default List