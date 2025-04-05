// ОБЪЕКТ - ЭТО ССЫЛОЧНЫЙ ТИП ДАННЫХ
// Порядок свойств в объекте не имеет значения и не сохраняется,
// но лучше сначала записывать ранее объявленные свойства, затем присваиваемые
//присвоение свойств объекту с помощью переменных:
const name = 'Bogdan';
const postQty = 23;

const userProfile = {
    name: name,
    postQty: postQty,
    hasSignedAgreement: false
}

console.log(userProfile)

//сокращенная запись: Чтобы не писать "name: name" пишем сразу значения - названия переменных,
// которые будут возвращать присоенные им значения
const name2 = 'RED';
const postQty2 = 40;

const userProfile2 = {
    name2,
    postQty2,
    hasSignedAgreement2: false
}

console.log(userProfile2)