import React, { useState } from "react";

function TodoForm(props){
    const [text, setText] = useState("")   

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
            // setItems([...items,text])//Spread operator para concatenar os itens dentro do array
            props.onAddItem(text)
            setText("")//limpa o valor do imput ao ser adicionado
        }
    }

    return(
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem} >Add</button>
        </form>
    )
}

export default TodoForm