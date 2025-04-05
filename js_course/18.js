// объединение объектов с помощью ...

const buttonInfo = {
    text: 'Buy'
}

const ButtonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...ButtonStyle
}

console.table(button)