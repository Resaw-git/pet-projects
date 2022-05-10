const shop = document.getElementById('shop')
shop.insertAdjacentHTML('beforeend', '<h2>Каталог</h2><div id="wrapper"></div>')
const wrapper = document.getElementById('wrapper')
wrapper.classList.add('d-flex', 'flex-wrap')
const products = {
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            description: 'Apple MacBook Air',
            price: 45600,
            image1: '../img/macbook1.jpg',
            image2: '../img/macbook2.jpg',
            image3: '../img/macbook3.jpg',
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            description: 'Logitech G102',
            price: 1000,
            image1: '../img/logitech1.jpg',
            image2: '../img/logitech2.jpg',
            image3: '../img/logitech3.jpg',
        },
        {
            id_product: 321,
            product_name: 'Монитор',
            description: 'LG 24MK430H',
            price: 22400,
            image1: '../img/lg1.jpg',
            image2: '../img/lg2.jpg',
            image3: '../img/lg3.jpg',
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
                <button type="button" class="btn btn-dark" id="image" data-id_product=${products.goods[i].id_product}>Посмотреть</button>
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
cart.classList.add('d-flex', 'flex-wrap')
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
    el.addEventListener('click', e => {
        const product = products.goods.find(item => item.id_product == e.target.dataset.id_product)
        basket.goods.push(product)
        total.innerText = `В корзине ${basket.goods.length} товаров на сумму ${basket.countBasketPrice()} рублей`
        showBasket()
    })
})

function showImage() {
    document.querySelectorAll('#image').forEach(el => {
        el.addEventListener('click', e => {
            const modal = document.querySelector('.modal-content')
            const product = products.goods.find(item => item.id_product == e.target.dataset.id_product)
            console.log(modal)
            const imgWrapper = document.createElement('div')
            imgWrapper.style.position = 'absolute'
            imgWrapper.style.display = 'flex'
            imgWrapper.style.justifyContent = 'center'
            imgWrapper.style.alignItems = 'center'
            imgWrapper.style.width = '100vw'
            imgWrapper.style.height = '100vh'
            imgWrapper.style.backgroundColor = 'rgba(0,0,0,.5)'
            modal.appendChild(imgWrapper)
            const img = document.createElement('img')
            img.style.height = '50vh'
            img.src = product.image1
            imgWrapper.appendChild(img)
            imgWrapper.addEventListener('click', (e) => {
                if (e.target != img) {
                    imgWrapper.style.display = 'none'
                } else {
                    console.log(getImage(product))
                }
            })
        })
    })
}

function getImage(obj) {
    return [obj.image1, obj.image2, obj.image3]
}

showImage()

