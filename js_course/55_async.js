// async - специальный синтаксис для упрощения работы с промисами 

// асинхронная функция (неявно содаёт промис)

async function asyncFn() {
    // всегда возвращает Промис
}

// другая форма записи
const asyncFn = async () => {
     // всегда возвращает Промис
}


const asyncFn = async () => {
    // сначала возвращает Промис
    return 'Success!' // затем эту строку
}
asyncFn()
// Promise {<fulfilled>: 'Success!'}
//    [[Prototype]]: Promise
//    [[PromiseState]]: "fulfilled"
//    [[PromiseResult]]: "Success!"


const asyncFn = async () => {
    // сначала возвращает Промис
    return 'Success!' // затем эту строку
}
asyncFn()
    .then(value => console.log(value))  // value будет равно 'Success!'



// если асинхронная функция вернёт ошибку
const asyncFn = async () => {
    // сначала возвращает Промис
    throw new Error('There was an error!')
}

asyncFn()
    .then(value => console.log(value))   // если Промис успешно исполнится
    .catch(error => console.log(error.message))  // если Промис вернул ошибку