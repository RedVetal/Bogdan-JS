// ЗНАЧЕНИЯ ПРИМИТИВНЫХ ТИПОВ СОХРАНЯЮТСЯ НЕПОСРЕДСТВЕННО В ПЕРЕМЕННЫХ
// значения объектов сохраняются по ссылке (название объекта -> место на диске)
let myName
console.log(myName)
myName = 'RED'
console.log(myName)

const objA = {
    name : 'Vika',
    age : 18,
}
console.log(objA)
const objB = objA
objB.gender = 'female'
console.log(objB)

//динамич типизац может сделать из функции примитив знач !!!
function funLog() {
    console.log('Hey there')
}
funLog()
funLog = 10
//funLog()  //TypeError: funLog is not a function
console.log(funLog)  // 10


//лучше объявлять функцию с помощью const и стрелочной функции (присваивать переменной значение функции)
const newfunLog = () => {
    console.log('New Hey there')
}
newfunLog()
//newfunLog = 20;  //TypeError: Assignment to constant variable.
newfunLog()
console.log(newfunLog)  //[Function: newfunLog]
