// расширение других классов   extends
// есть родительский класс (например класс Array) со своим родительским конструктором
// мы методы нашего созданного класса расширяем методам добавленного класса (здесь добавили класс array)

class NumbersArray extends Array {
    sum() {                          // здесь суммируем элементы любого массива
        return this.reduce((el, acc) => acc += el, 0)
    }
}
            // создаём новый массив, как экземпляр класса NumbersArray (а NumbersArray уже расширен методами основного Array)
const myArray = new NumbersArray(2, 5, 7)    // new Array [2,5,7]  

console.log(myArray)              //  NumbersArray(3) [ 2, 5, 7 ]
const a = myArray.sum()         // теперь у нашего массива есть метод sum()
console.log(a)                //  14


// цепочка прототипов здесь:
// Object -> Array -> NumbersArray -> myArray
// методы ищутся по всей цепочке прототипов

// NumbersArray.prototype === myArray.__proto__