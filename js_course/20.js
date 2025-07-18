// Функции и функциональные выражения
// их можно присваивать переменным, использовать как аргумент при вызове другой функции (колбэк)


// объявленная функция
function myFn(a,b) {         // 1 имеет имя
    let c                    // 2 можно использовать автономно в любом месте
    a = a + 1                
    c = a + b 
    return c 
}


// функциональное выражение
function (a,b) {              // 1 не имеет имени
    let c                    // 2 нельзя использовать автономно
    a = a + 1
    c = a + b 
    return c 
}

//пример    // анонимное функциональное выражение   function(){}
setTimeout(function() {
    console.log('hghg')
}, 1000)



// присваивание функционального выражения переменной
const myFunction = function(a,b) {         
    let c                    
    a = a + 1
    c = a + b 
    return c 
}

myFunction(5, 3)


// стрелочная функция (всегда анонимна)   () => {}
(a,b) => {         
    let c                    
    a = a + 1
    c = a + b 
    return c 
}

//пример    // анонимная стрелочная функция   () => {}
setTimeout(() => {
    console.log('hghg')
}, 1000)



// !! присваивание имени стрелочной функции ( делай так !!)
const myFunction = (a,b) => {    // этой функции, объявленной с помощью переменной const     
    let c                        // нельзя будет присвоить другое значение
    a = a + 1
    c = a + b 
    return c 
}

myFunction2(5, 3)

// неявный возврат значения 
(a,b) => a + b      // если тело стрел ф. сост из одного выраж, то можно не писать {} и будет авто return

