// статические методы классов     static
// это методы, доступные, как свойство класса
// и они не наследуются экземплярами

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {                      
        this.votesQty += 1
    }

    static mergeComments(first, second) {  // не наследуется (доступен только как метод класса Comment)
        return `${first} ${second}`   // конкатенация через шаблонные строки
    }
}

const com = Comment.mergeComments('First comment.', 'Second comment')
console.log(com)   //  First comment. Second comment


const newCom = new Comment('There is no mergeComments')  // mergeComments не унаследовался
console.log(newCom.mergeComments)  // undefined
newCom.mergeComments()  // false   is not a function
