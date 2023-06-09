
class Item {

    static lastId = 0 //Esse é o id inicialpara cada item, Static é uma variavel de classe

    constructor(text){
        this.text = text
        this.id = Item.lastId++
        this.done = false //indica se uma tarefa ja foi concluida, done é igual a concluida
    }
}

export default Item