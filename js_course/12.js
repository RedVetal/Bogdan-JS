// передача в функцию значения по ссылке (мутация внешнего объекта)
// внутри функции не рекомендуется мутировать внешние объекты

const personOne = {
    name: 'Bob',
    age: 21          // это значение изменится после вызова функции
}

function increasePersonAge(person) {
    person.age +=1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age)  // 22