// НЕ НАДО ТАК

function myFn() {
    a = true          // необъявленная переменная уходит в глобальную область видимости!!!
                         // (нет ни let ни const у переменной)
    console.log(a)
}

myFn()  // true

console.log(a) //true


// так можно (но лучше не надо)

'use strict'           // это выражение даёт команду JS анализировать код 

function myFn2() {
    a = 220         // uncaught
                    // переменная НЕ уходит в глобальную область видимости
    console.log(a)
}

myFn2()  // a is not defined

console.log(a) //true