// как избежать мутаций объекта
// вариант 2: ... - спрэд (оператор разделения объекта на свойства)
// но это тоже не работает с вложенными объектами оригинала (они при изменении смутируют)

const person = {
    name: 'Bob',
    age: 25
}

const person2 = { ...person}

person2.name = 'Alice'

console.log(person2.name) // Alice  
console.log(person.name) // Bob 