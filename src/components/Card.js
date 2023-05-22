import React from "react";

function Card(props){

    // Na div do return, em classname, foi utilizado o props.classname para pegar do arquivo List.js o classname "item", veja na linha abaixo:
    // <Card className={item.done ? "done item" : "item"} >
    // então, se eu ja tiver props.classname, vai retornar props.classname mais "card", se não tiver nada, só retorna card.
    // " vai retornar na classe : item e card"
    // isso tudo foi feito pra pegar a classname item do arquivo List.js
    
    return(
        <div className={props.className? ` ${props.className} card` : "card"} >
            {props.children}
        </div>
    )
  
}



export default Card