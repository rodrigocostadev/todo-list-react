
class Item {

    static lastId = 0 // Static é uma variavel de classe

    constructor(text){
        this.text = text
        this.id = Item.lastId++
        this.done = false //indica se uma tarefa ja foi concluida
    }
}

export default Item