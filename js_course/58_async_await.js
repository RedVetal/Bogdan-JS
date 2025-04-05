//    Async/Await  + Try/Catch
// Async/Await - это синтаксическая надстройка над промисам
// await синтаксис возможен только внутри async функций
// async функция всегда возвращает Promise
// async функция ожидает результата инструкции await и не выполняет последующие инструкции (pending)
//    (но при этом остальные функции сайта доступны (нажатие кнопок на экране))
//    (то есть Промисы не блокируют другие части приложения)


/* создание функции для Промиса (можно её будет экспортировать в другие фрагменты кода)

const getData = (url) =>
    new Promise((resolve,reject) =>
    fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))       // resolve(json) = data
        .catch(error => reject(error))      // reject(error) = error
)

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))           // data передаётся в строку 7
    .catch(error => console.log(error.message))  //  error передаётся в строку 8 */


//   переписываем этот Промис на Async/Await + Try/Catch:

const getData = async (url) => {
    const res = await fetch(url)  // ожидает результата (исполение\отклонение) и дальше не идёт
    const json = await res.json() // ожидает результата (исполение\отклонение) и дальше не идёт
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}
// выполнение кода продолжится