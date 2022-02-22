function numToObj(num) {
    num = num.toString()
    if (num > 999) {
        console.log('Число больше 999')
        return {}
    }
    if (num < 0) {
        console.log('Число меньше 0')
        return {}
    }
    return {
        'единицы': num[num.length - 1],
        'десятки': num[num.length - 2],
        'сотни': num[num.length - 3],
    }
}

console.log(numToObj(123))


const basket = {
//добавить товар
    addGood(good, count) {
        this.good = good
        this.good.count = count
    }
}

const goods = {
    'яблоки': {
        name: 'яблоки',
        price: 50,
    },
    'груши': {
        name: 'груши',
        price: 60,
    },
    'бананы': {
        name: 'бананы',
        price: 70,
    },
}






