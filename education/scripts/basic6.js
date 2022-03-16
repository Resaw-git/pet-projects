const shop = document.getElementById('shop')
shop.insertAdjacentHTML('beforeend', '<h2>Каталог</h2><div id="wrapper"></div>')
const wrapper = document.getElementById('wrapper')
wrapper.classList.add('d-flex')
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

function showShop() {
    if (products.goods.length == 0) {
        shop.innerText = 'Каталог пуст'
    } else {
        for (let i = 0; i < products.goods.length; i++) {
            wrapper.insertAdjacentHTML(
                'beforeend',
                `<div class="card m-3" style="min-width: 300px;">
                <div class="card-body">
                <h5>${products.goods[i].product_name}</h5>
                <p>${products.goods[i].description}</p>
                <p>Цена: ${products.goods[i].price}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                <button type="button" class="btn btn-dark" id="look">Посмотреть</button>
                <button type="button" class="btn btn-dark" id="buy" data-id_product=${products.goods[i].id_product}>Купить</button>
                </div>
            </div>`)
        }
    }
}

function clearCatalog() {
    products.goods = []
    showShop()
}

showShop()


shop.insertAdjacentHTML('beforeend', '<br><h2>Корзина</h2><div id="cart"></div>')
const cart = document.getElementById('cart')
cart.classList.add('d-flex')
cart.classList.add('flex-wrap')
const basket = {
    goods: [
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
        cart.innerText = ''
        for (let i = 0; i < basket.goods.length; i++) {
            cart.insertAdjacentHTML(
                'beforeend',
                `<div class="card m-3">
                <div class="card-body">
                <h5>${basket.goods[i].product_name}</h5>
                <p>${basket.goods[i].description}</p>
                <p>Цена: ${basket.goods[i].price}</p>
                </div>
            </div>`)
        }
    }
}

function clearBasket() {
    basket.goods = []
    showBasket()
}

showBasket()

shop.insertAdjacentHTML('beforeend', '<p id=total></p>')
const total = document.getElementById('total')

document.querySelectorAll('#buy').forEach(el => {
    el.addEventListener('click', (e) => {
        const product = products.goods.find(item => item.id_product == e.target.dataset.id_product)
        basket.goods.push(product)
        total.innerText = `В корзине ${basket.goods.length} товаров на сумму ${basket.countBasketPrice()} рублей`
        showBasket()
    })
})



