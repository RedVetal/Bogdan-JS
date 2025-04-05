// Все циклы - это инструкции (не выражения)
// FOR
// (для массивов лучше использовать forEach map reduce indexOf - собственные методы(ф-ции высшего порядка))

// for ( начальная инструкция;   условие;   итерационное действие ) {
//     блок кода, выполняемый на каждой итерации
// }

for ( let i = 0; i < 5; i++ ) {
    console.log(i)               // 0 1 2 3 4
}


const myArray = ['first', 'second', 'third']
for(i = 0; i < myArray.length; i++){
    console.log(myArray[i])            // выведет элемент массива
    console.log(i)                // выведет индекс массива
}

myArray.forEach((element, index) => {
    console.log(element, index)
})