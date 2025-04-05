// ключевое слово import размещается всегда сверху файла

import sumNumbers from './43_moduleOne.mjs'  
// ./ пишем в Линукс стиле (это то, что находится в текущей папке с файлами)
// теперь переменная sumNumbers (та,что sum в 43_modulesOne.mjs) доступна в этом файле

const res1 = sumNumbers(10,2) // вызываем импортированную функцию и присваиваем переменной
console.log(res1)

const res2 = sumNumbers(5,8) 
console.log(res2)