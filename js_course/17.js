//оператор ... разделения объекта на свойства

const button = {
    with: 200,
    text: 'Buy'
}

const redButton = {
    ...button,            // сначала разделили объект
    color: 'red'          // затем добавили свойство (стало 3 свойства)
}                       // если такое свойство было, оно будет перезаписано

console.table(redButton)  // вывести объект в табличном виде

const newText = {
    text: 'newTexthere', // в таком примере ничего не изменится
    ...button
}

console.table(newText)