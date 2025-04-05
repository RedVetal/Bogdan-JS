// ожидание результата await

const timerPromise = () =>            // функция возвращает Промис
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now() // засекли время старта
    await timerPromise()  // функция дальше не выполняется, пока не получен результат Промиса (исполнен/отклонён)
    const endTime = performance.now() // засекли время финиша
    console.log('Timer ended', endTime - startTime)
}

asyncFn()