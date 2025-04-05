// инструкция SWITCH  (аналог if if if)

switch (выражение) {
    case A:
        // действия если выражение === А
        break
    case B:
        // действия если выражение === В
        break
    default:
        // действия по умолчанию
}



const month = 2

switch (month) {
    case 12:
        console.log('december')
        break
    case 1:
        console.log('january')
        break
    case 2:
        console.log('february')
        break
    default:
        console.log('This is not winter month')
}