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
}

export default List