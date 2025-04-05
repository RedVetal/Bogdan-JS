// методы массивов (функции высшего порядка) 
// (это функции главного прототипа Array - наследуется всеми массивами)
// они МУТИРУЮТ исходный массив

// PUSH 
// добавить элемент в конец массива

const myArray = [1, 2, 3]

myArray.push(4)   // добавить элемент в конец массива

console.log(myArray) // [ 1, 2, 3, 4 ]

// POP
// удалить последний элемент из массива и вернуть этот элемент

myArray.pop() // удаляет последний элемент из массива
                 // и возвращает этот элемент
console.log(myArray)   // [ 1, 2, 3 ]
const removrdElement = myArray.pop()  // в этой строке элемент тоже удалится

console.log(myArray)   // [ 1, 2 ]
console.log(removrdElement) // 3

// UNSHIFT
// добавление элемента в начало массива

const myArray2 = [1, 2, 3]

myArray2.unshift(true) // [true, 1, 2, 3]
myArray2.unshift('abc') // ['abc', true, 1, 2, 3]
console.log(myArray2)

// SHIFT
// удалить элемент из начала массива и вернуть этот элемент

const remElem = myArray2.shift()

console.log(myArray2) // [ true, 1, 2, 3 ]
console.log(remElem)  // abc
