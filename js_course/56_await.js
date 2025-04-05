// await - ожидание результата другого промиса
// можно использовать только внутри асинхронной функции

// const asyncFn = async () => {
//     await <Promise>
// }
// asyncFn()

const timerPromise = () => 
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    await timerPromise()  // функция дальше не выполняется, пока не получен результат Промиса (исполнен/отклонён)
    console.log('Timer ended')
}

asyncFn()

