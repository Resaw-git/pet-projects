let div = document.getElementById(1)

let str = ''
const reference = 'sometext'
let text = 'Crypto works'


document.addEventListener('keypress', event => {
    str += event.key
    console.log('str: ', str)
    if (reference.indexOf(str) !== 0) {
        str = ''
        return
    }
    if (str === reference) {
        console.clear()
        div.innerHTML = text
        str = ''
    }
})

const newStr = 'new some text'

let crypted = newStr.split('')
    .map(value => value.charCodeAt(0))
    .join(' ')

console.log(crypted)

let decoding = crypted => crypted.split(' ')
    .map(item => String.fromCharCode(item))
    .join('')
    
console.log(decoding(crypted))