//.точка это оператор (точечная запись))
// ОБЪЕКТ - ЭТО ССЫЛОЧНЫЙ ТИП ДАННЫХ (название объекта ссылается на область в памяти)
// и на эту же область могут ссылаться ещё другие объекты
// создавая объект с помощью переменной, объявленной как const, а затем меняя его,
// мы увидим тот же объект, но с новыми свойствами (он изменится не смотря на 'const') 
// ссылка в переменной на этот объект остаётся той же, но сам объект мутирует
const objC = {
    city : 'New York'    // свойство объекта(ключ:значение)
}
console.log(objC)

objC.popular = true;
console.log(objC)

objC.country = 'USA'
console.log(objC)

//оператор удаления
delete objC.country
console.log(objC)

//еще один вид записи присвоения (скобочная запись)
objC['continent'] = 'North America'
console.log(objC)

const countryPropertyName = 'country'
objC['country'] = 'USA'
console.log(objC)


//вложенный объект
const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}
console.log(myCity.info.isPopular)  //true

delete myCity.info['isPopular']     //  delete myCity.info.isPopular
console.log(myCity)                     //{ city: 'New York', info: { country: 'USA' } }