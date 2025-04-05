// FOR OF  
// не для объектов !!!  (объект - неитерируемый элемент в js) (т.к. порядок свойств в объекте не важен)
// для итерируемых элементов (например строка и символы в ней)

/* for (Element of Iterable) {
      // действия с определенным элементом
} */


///// для строк //////
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}
// H
// e
// y


///// для массивов ///////
const myArray = [true, 10, 'abc', null]

for (const element of myArray) {
    console.log(element)
}
// true
// 10
// abc
// null