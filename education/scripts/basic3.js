document.getElementById(1).addEventListener('click', () => {
    let i = 0
    while (i <= 100) {
        let count = 0
        let j = 1
        while (j < i) {
            if (i % j == 0) count++
            j++
        }
        if (count == 1) console.log(i)
        i++
    }
})

document.getElementById(2).addEventListener('click', () => {
    const basket = [
        ['яблоки', 50, 1], 
        ['груши', 60, 2],
        ['бананы', 70, 3]
        /*первый элемент массива наименование товара
        второй цена
        третий колличество*/
    ]
    
    function countBasketPrice(basket) {
        let sum = 0
        for (i=0; i<basket.length; i++) {
            sum = sum + basket[i][1] * basket[i][2]
        }
        return sum
    }
    
    console.log('Сумма товаров в корзине: ' + countBasketPrice(basket))

})

document.getElementById(3).addEventListener('click', () => {
    for (i=0; i<=9; console.log(i), i++) {}
})


document.getElementById(4).addEventListener('click', () => {
    function pyramid(rows) {
        let symbol = ''
        for (i=0; i<rows; i++) {
            symbol += 'х'
            for (j=0; j<i; j++) {
                symbol += 'х'
            }
            symbol += '\n'
        }
        console.log(symbol)
    }
    
    pyramid(20)

})
