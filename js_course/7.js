// как избежать мутаций объекта
// вариант 1: копировать свойства объекта в новый объект
// это работает, если только у объекта person нет вложенных объектов
// если есть, то они смутируют (при их изменении)

const person = {
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2.age) // 26  
console.log(person.age) // 25  

const per3 = person   // здесь мы присвоили новой переменной то же ссылочное значение, 
                           // что и у объекта person
console.log(per3)       // выведет свойства объекта person (те же, что и у per3)
console.log(per3 === person) // true