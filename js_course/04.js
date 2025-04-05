//выражение возвращает значение (а=5)
//значение может быть функцией
//каждый объект имеет свойства :
//   (маша {пол: 'ж', рост: 150}) маша-объект, пол и рост - свойства
//метод - это свойство объекта, значение которого - функция

const myCity = {
    name: 'NEW YORK',                            //name- это просто свойство
    cityGreeting: function() {                    //cityGreeting- это метод
        console.log('Hello, New York')
    }
}
myCity.cityGreeting()
console.log(myCity.name); myCity.cityGreeting()


//другая форма записи
const myCity2 = {
    name: 'NEW YORK',                          
    cityGreeting() {                          //сразу обозначаем метод
        console.log('Hello, New York')
    }
}
myCity.cityGreeting()
console.log(myCity.name); myCity.cityGreeting() 
//myCity.name - обращаемся к свойству  (к значению свойства по ключу)
//myCity.cityGreeting()- вызываем метод  ()