// создание нескольких экземпляров класса

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')   // разные объекты 
const secondComment = new Comment('Second comment') // с разными 
const thirdComment = new Comment('Third comment')   // собственными свойствами