// значения параметров ф. по умолчанию

function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

multByFactor(10, 2) // 20
multByFactor(5)     // 5



const myFn = (value1, value2 = 5) => value1 + value2

console.log(myFn(2, 4))  // 6
console.log(myFn(2))     // 7


//////////////////////////////////////
                      // значение вычисляется в момент вызова ф.  
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})               // в круглых скобках неявный возврат объекта

const firstPost = {
    id: 1,
    author: 'Bogdan',
}

a = newPost(firstPost)
console.log(a)


// явный возврат объекта
const newPost2 = (post, addedAt = Date()) => {
    return {
        ...post,
        addedAt,
    }
}   
         

const firstPost2 = {
    id: 1,
    author: 'Bogdan',
}

b = newPost(firstPost)
console.log(b)