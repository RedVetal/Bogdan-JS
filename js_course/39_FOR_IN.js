// цикл FOR IN 


/*for (key in Object) {
      // действия с КАЖДЫМ свойством объекта
      // значения свойства - Object[key]
}*/

/////// для объектов ////////
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {         // key это индекс
    console.log(key, myObject[key])
}
// x 10
// y true
// z abc

///////// для массивов ///////////
const myArray = [true, 10, 'abc', null]

for (const key in myArray) {    // key это индекс
    console.log(myArray[key])  // получаем доступ к элементам массива используя индекс
}
// true
// 10
// abc
// null