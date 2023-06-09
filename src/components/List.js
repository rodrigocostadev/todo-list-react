import React from "react";
import Card from "./Card";

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
            <li  key={item.id} className={item.done ? "done item" : "item"} >
                <Card className={item.done ? "done item" : "item"} >
                    {item.text}
                    <div>
                        <button className="buttonIcons" onClick={() =>{props.onDone(item)}} ><DoneImg done={item.done} ></DoneImg></button>
                        <button className="buttonIcons" onClick={() =>{props.onItemDeleted(item)}} ><img src="./assets/trash-bin.png" ></img></button>
                    </div>
                </Card>               
                
            </li>)
            } 
        </ul>
    )
    
    // EXPLICANDO TAREFA CONCLUIDA, O DONE (aula marcando um item como realizado):
    // por estado inicial done sempre vai ser falso, isso é visto no arquivo item.js
    // veja a linha:
    // <li className={item.done ? "done" : ""} key={item.id} >
    // mas se o botão de tarefa concluida for clicado, done vai se tornar verdadeiro como é visto na function onDone do arquivo Todo.js.
    // então se done for verdadeiro, a classe do <li> vai receber done, então vai mudar o estado da tarefa que foi clicada, 
    // alterando a imagem para "verde, de concluido" e sublinhando a tarefa, isso é visto no arquivo Todo.css :
    // .done{ text-decoration: line-through; }
    // ao clicar novamente na imagem, vai mudar o nome da classe para vazio " ", alterando o estado que era visto anteriormente
    
}

export default List