// метод MAP 
// как и forEach проходит по элементам массива, 
// но в отличие от forEach, MAP формирует новый массив (не меняя оригинальный)
// нужен для создания нового массива на основе исходного (оригинального)

const myArray = [1, 2, 3]

const newArray = myArray.map(el => el * 3) // результат работы метода MAP можно присвоить переменной
                                          // есть неявная инструкция return

console.log(myArray)  // [ 1, 2, 3 ]  оригинальный массив не изменился
console.log(newArray) // [ 3, 6, 9 ]


const newArray0 = myArray.map(function (el) { // анонимное функциональное выражение
    return el * 5
})
console.log(newArray0)

const newArray2 = myArray.map((el) => {
    el * 3
})                   // ф-ция ничего не возвращает (нет слова return)
console.log(newArray2)   //  [ undefined, undefined, undefined ]


const newArray3 = myArray.map((el) => {
    return (el * 4)
})                   // 
console.log(newArray3)   //  [ 4, 8, 12 ]