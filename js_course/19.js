// шаблонные строки

const hello = 'Hello'
const world = 'World'

const greeting = `${hello} ${world}`

console.log('now print ' + greeting)

// вместо ${world} может быть любое выражение,
//  например вызов функции

// 10 + 'Bogdan' выведет '10Bogdan'
// undefined + 'abc' выведет 'undefinedabc'