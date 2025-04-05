// мутации объекта
// объект, объявленный через переменную person
// мы можем менять и через переменную person2
// person и person2 это просто ссылки на объект

const person = {
    name: 'Bob',
    age: 25
}

const person2 = person
 
person2.age = 26
person2.isAdult = true

console.log(person.age) // 26
console.log(person.isAdult) // true
