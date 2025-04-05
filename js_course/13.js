// передача в функцию значения по ссылке (БЕЗ мутации внешнего объекта)
// создаем копию объекта внутри функции

const personOne = {
    name: 'Bob',
    age: 21          // это значение НЕ изменится после вызова функции
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person) // создаём копию объекта, переданного в параметр.  и записываем в переменную
    updatedPerson.age +=1                           // проводим действия с копией (т.е уже с новым объектом)
    return updatedPerson                            // возвращаем значение нового объекта
}

const updatedPersonOne = increasePersonAge(personOne) // записываем в переменную результат работы функции
console.log(personOne.age)  // 21                 значения в старом объекте не изменились
console.log(updatedPersonOne.age) // 22            значения присвоены новому объекту