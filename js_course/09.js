//    как избежать мутаций объекта ЛУЧШИЙ СПОСОБ
//  (оригинальный объект останется без изменений)
// вариант 3: сначала конвертируем объект в строку методом   stringify,
// затем конвертируем строку в объект методом   parse
// вложенные объекты оригинала не смутируют
// т.к создастся полностью новый объект с новыми ссылками

const person = {
    name: 'Bob',
    age: 25
}

const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Alice'

console.log(person2.name) // Alice  
console.log(person.name) // Bob 