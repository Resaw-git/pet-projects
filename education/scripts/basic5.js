//Задание 1
const chessboard = document.getElementById('chessboard')
const table = document.createElement('table')
const tbody = document.createElement('tbody')
const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'J', 'H']

chessboard.appendChild(table)
table.appendChild(tbody)

for (let row = 0; row <= 8; row++) {
    const tr = document.createElement('tr')
    document.querySelector('tbody').appendChild(tr)
    for (let col = 0; col <= 8; col++) {
        const th = document.createElement('th')
        const td = document.createElement('td')
        if (row == 0) {
            document.querySelector('tr').appendChild(th)
            th.innerText = letters[col]
            th.style.width = "30px"
            th.style.textAlign = "center"
        } else {
            document.querySelectorAll('tr').forEach(el => {
                if (col == 0) {
                    el.appendChild(th)
                    th.innerText = 9 - row
                    th.style.height = "30px"
                    th.style.textAlign = "center"
                } else {
                    el.appendChild(td)
                    td.style.border = "1px solid"
                    if ((col - row) % 2 != 0) {
                        td.style.backgroundColor = "black"
                    }
                }
            })
        }
    }
}

//Задание 2
const cart = document.querySelector('.cart')
const basket = {
    goods: [
    {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600,
        quantity: 1
    },
    {
        id_product: 456,
        product_name: "Мышка",
        price: 1000,
        quantity: 1
    }
    ],
    countBasketPrice() {
        if (this.goods.length > 0) {
            return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
        }
    }
}

function showBasket() {
    if (basket.goods.length == 0) {
        cart.innerText = 'Корзина пуста'
    } else {
        for (let i = 0; i < basket.goods.length; i++) {
            cart.insertAdjacentHTML(
                'beforeend',
                `<div class="card m-1">
                <div class="card-body">
                <h5 class="card-title">${basket.goods[i].product_name}</h5>
                <p class="card-text">Цена: ${basket.goods[i].price}</p>
                <p class="card-text">Колличество: ${basket.goods[i].quantity}</p>
                </div>
            </div>`)
        }
        cart.insertAdjacentText('beforeEnd', `В корзине ${basket.goods.length} товаров на сумму ${basket.countBasketPrice()} рублей`)
    }
}

function clearBasket() {
    basket.goods = []
    showBasket()
}

showBasket()

document.getElementById('clear_cart').addEventListener('click', clearBasket)

//Задание 3 
const catalog = document.getElementById('catalog')
const products = {
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            description: 'Apple MacBook Air',
            price: 45600,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            description: 'Logitech G102',
            price: 1000,
        },
        {
            id_product: 321,
            product_name: 'Монитор',
            description: 'LG 24MK430H',
            price: 22400,
        },
    ]
}



function showCatalog() {
    if (products.goods.length == 0) {
        catalog.innerText = 'Каталог пуст'
    } else {
        for (let i = 0; i < products.goods.length; i++) {
            catalog.insertAdjacentHTML(
                'beforeend',
                `<div class="card m-1">
                <div class="card-body">
                <h5 class="card-title">${products.goods[i].product_name}</h5>
                <p class="card-text">${products.goods[i].description}</p>
                <p class="card-text">Цена: ${products.goods[i].price}</p>
                </div>
            </div>`)
        }
    }
}

function clearCatalog() {
    products.goods = []
    showCatalog()
}

showCatalog()

document.getElementById('clear_catalog').addEventListener('click', clearCatalog)


