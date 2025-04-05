// перейди на этот сайт и введи это в терминал панели разработчика
// fetch запрос (создаётся Промис (в состоянии pending))
fetch('https://jsonplaceholder.typicode.com/todos') // метод fetch возвращает Промис
    .then(response => {
        console.log(response)
        return response.json()          // метод json также возвращает Промис
    })    
    .then(json => console.log(json))     // здесь уже вернутся сами объекты
    .then(error => console.log(error.message)) 