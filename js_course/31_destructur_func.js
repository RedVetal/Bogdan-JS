// Деструктуризация в функциях
// Записываем нужные свойства объекта в параметры функции при объявлении
// Ф-ция при вызове получает объект в качестве аргумента

const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false,
}

//   переменная   деструктуризация св-в объекта внутри параметров ф-ции
const userInfo = ({name, commentsQty}) => {      // стрелоч ф-ция,  созданы переменные name и commentsQty
    if (!commentsQty) {                          // со значениями из объекта userProfile (без использования let или const)
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments` 
}

userInfo(userProfile)  // вызываем ф-цию и передаём ей объект
// User Bogdan has 23 comments