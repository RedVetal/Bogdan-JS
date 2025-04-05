// метод FOREACH   (всегда используй его для массивов)
// НЕ МУТИРУЕТ исходный массив
// только перебирает весь массив и производит действие с каждым элементом
// нужен для работы с элементами массива

const myArray = [1, 2, 3]

myArray.forEach(el => console.log(el * 2))   // анонимная стрелочная функция с неявным возвратом значения
                                             // эта колбэк ф-ция вызовется столько раз,
                                              // сколько элементов в массиве
                                              // и выполнит действие для каждого элемента

// 2
// 4
// 6

const res = myArray.forEach((el) => console.log(el * 2)) // анонимная стрелочная функция присвоена переменной
                                            // но значение res будет undefined, т.к. forEach работает только с исходным массивом
                                            // и в forEach нет инструкции return


console.log(myArray) // оригинальный массив не изменился
console.log(res) // undefined 



const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.keys(myObject).forEach(key => {  // Object.keys(myObject) - получение всех ключей объекта в виде массива
    console.log(key, myObject[key])
})
// x 10
// y true
// z abc

Object.values(myObject).forEach(value => {  // Object.keys(myObject) - получение всех значений объекта в виде массива
    console.log(value)
})
// 10
// true
// abc