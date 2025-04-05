// JSON - формат обмена данными (между сервером и пользователем)
// похож на объект JS, только в виде строки и везде двойные кавычки

/*{
    {
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}
}*/

//  '{"userId":1,"id":1,"title":"Test title","status":{"completed":false}}'  //JSON

// Чтобы распарсить этот JSON в объект JS
// нужно передать этот JSON как аргумент в вызове метода parse()
// JSON.parse()  получим

   /* {
        userId: 1,
        id: 1,
        title: 'Test title',
        status: {
            completed: false,
        },
    }  */




// Чтобы конвертировать объект JS в JSON нужно использовать метод stringify()