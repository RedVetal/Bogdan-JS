// классы позволяют создавать прототипы для объектов
// на основании прототипов создаются экземпляры

// экземпляры могут иметь собственные свойства и методы
// экземпляры наследуют свойства и методы прототипов

// class - шаблон для создания экземпляров класса


// этот класс будет прототипом для экземпляров (в js это объект на самом деле)
class Comment {     // создали класс с двумя методами (constructor, upvote)
    constructor(text) {  // constructor вызывается только при создании нового экземпляра класса
        this.sometext = text  // переменная this указывает на экземпляр класса (передаёт значения в новый сделанный класс)
        this.votesQty = 0 // (this будет воздействовать на объект firstComment)(или на другой экземпляр класса)
    }

    upvote() {              // унаследованный метод (будет наследоваться каждым экземпляром класса)
        this.votesQty += 1  // унаследованное свойство
    }
}

                     // вызывается функция constructor из класса Comment
const firstComment = new Comment('Here first comment')  // создание экземпляра класса с помощью ключевого слова (new)
                       // constructor(text)   передаём аргумент ('First comment') в параметр конструктора (text)
    // так же объект firstComment унаследует метод upvote()

console.log(firstComment)

/*Comment {sometext: 'First comment', votesQty: 0}
    sometext: "First comment"
    votesQty: 0
    [[Prototype]]: Object
        constructor: class Comment
        upvote: ƒ upvote()
        [[Prototype]]: Object*/

// цепочка прототипов: Object -> Comment -> firstComment

firstComment instanceof Comment // true
firstComment instanceof Object // true

firstComment.upvote()
console.log(firstComment.votesQty) // 1   // методы можно вызывать многократно
firstComment.upvote()
console.log(firstComment.votesQty) // 2
firstComment.sometext
console.log(firstComment.sometext)

// Comment.prototype.constructor === Comment


// проверка принадлежности свойств экземпляру объекта

firstComment.hasOwnProperty('text')        // true  (собственное свойство firstComment, унаследованное через конструктор)
firstComment.hasOwnProperty('votesQty')    // true
firstComment.hasOwnProperty('upvote')      // false  (upvote это не собственный метод объекта firstComment)
firstComment.hasOwnProperty('hasOwnProperty') // false