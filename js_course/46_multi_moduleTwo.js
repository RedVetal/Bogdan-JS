// несколько импортов
// имена переменных должны совпадать (с именами в файле экспорта)
// переменные можно переименовать (например one as oneRenamed)

import {
    one as oneRenamed,
    two
} from './45_multi_moduleOne.js'

console.log(oneRenamed)
console.log(two)