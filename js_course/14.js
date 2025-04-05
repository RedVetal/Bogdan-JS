// колбэк функция 
// это просто функция, вызываемая в теле другой функции

function anothetFunction() {
    // do something..
}

function fnWithCallback(callbackFunction) {
    callbackFunction      // do something with anothetFunction
}

fnWithCallback(anothetFunction)   //  anothetFunction без ()



function printMyName() {
    console.log('Bogdan')
}

setTimeout(printMyName, 5000)  //функция setTimeout вызовет функцию printMyName через 5 секунд