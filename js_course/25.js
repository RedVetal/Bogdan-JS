// работа с массивами

const myArray = [1,2,3,4]
console.log(myArray)        // [1,2,3,4]
console.log(myArray.length) // 4

myArray[2] = 'abc'   // заменить элемент с индексом 2 (это цифра 3) на 'abc'

console.log(myArray)        // [1,2,'abc',4]
console.log(myArray.[2])    // 'abc'

myArray[4] = true

console.log(myArray)        // [1,2,'abc',4,true]
console.log(myArray.length) // 5