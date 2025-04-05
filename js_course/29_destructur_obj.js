// деструктуризация объекта
// - это присвоение переменным значений свойств объекта
// ключ свойства становится названием переменной, значение свойства становится значением переменной 
// порядок присвоения не важен (так же как и порядок св-в в объекте)
const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const { name, commentsQty } = userProfile    // объявление новых переменных и присваивание значений
const { hasSignedAgreement } = userProfile   // на основе значений свойств объекта

console.log(name)        // Bogdan
console.log(commentsQty) // 23
console.log(hasSignedAgreement) // false