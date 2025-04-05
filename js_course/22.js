// работа с ошибками try/catch

const fnWithError = () => {           // функция, содержащая ошибку
    throw new Error ('Some error')
}

try {                      // сюда помещаем блок кода, который может содержать ошибку
    fnWithError()
} catch (error) {
    console.error(error)        // вывести целую ошибку
    console.log(error.message)  // вывести сообщение
}

console.log('Continue...')    // обычно код с ошибкой останавливается
                             // но используя try/catch выполнение продолжится !!!