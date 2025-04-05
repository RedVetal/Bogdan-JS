// создание функции для Промиса (можно её будет экспортировать в другие фрагменты кода)

const getData = (url) =>
    new Promise((resolve,reject) =>
    fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))       // resolve(json) = data
        .catch(error => reject(error))      // reject(error) = error
)

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))           // data передаётся в строку 7
    .catch(error => console.log(error.message))  //  error передаётся в строку 8