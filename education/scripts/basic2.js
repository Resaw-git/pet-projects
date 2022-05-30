document.getElementById(3).addEventListener('click', () => {
    const a = Math.floor(Math.random() * 100 * ((Math.random() - .5) * 2))
    const b = Math.floor(Math.random() * 100 * ((Math.random() - .5) * 2))

    if (a > 0 && b > 0) {
        alert('a = ' + a + ', b = ' + b + ', a - b = ' + (a - b))
    } else if (a < 0 && b < 0) {
        alert('a = ' + a + ', b = ' + b + ', a * b = ' + (a * b))
    } else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
        alert('a = ' + a + ', b = ' + b + ', a + b = ' + (a + b))
    }
})

document.getElementById(4).addEventListener('click', getSwitch)
document.getElementById(6).addEventListener('click', () => {
    let a = +prompt('Введите первый аргумент')
    let b = +prompt('Введите второй аргумент')
    let op = prompt('Введите название операции (sum, diff, mult, div)')
    alert('Результат выражения равен ' + mathOperation(a, b, op))
})

function getSwitch() {
    const a = Math.floor(Math.random() * 15)
    switch (a) {
        case 0:
            console.log(0)
        case 1:
            console.log(1)
        case 2:
            console.log(2)
        case 3:
            console.log(3)
        case 4:
            console.log(4)
        case 5:
            console.log(5)
        case 6:
            console.log(6)
        case 7:
            console.log(7)
        case 8:
            console.log(8)
        case 9:
            console.log(9)
        case 10:
            console.log(10)
        case 11:
            console.log(11)
        case 12:
            console.log(12)
        case 13:
            console.log(13)
        case 14:
            console.log(14)
        case 15:
            console.log(15)
    }
}

function sum(a, b) {
    return a + b
}

function diff(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2)
        case 'diff':
            return diff(arg1, arg2)
        case 'mult':
            return mult(arg1, arg2)
        case 'div':
            return div(arg1, arg2)
    }
}


function power(val, pow) {
    if (pow == 1) {
        return val
    } else {
        return val * power(val, pow - 1)
    }
}