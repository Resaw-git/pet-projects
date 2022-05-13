const shop = document.getElementById('shop')
const products = {
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            description: 'Apple MacBook Air',
            price: 45600,
            count: 0,
            image1: '../img/macbook1.jpg',
            image2: '../img/macbook2.jpg',
            image3: '../img/macbook3.jpg',
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            description: 'Logitech G102',
            price: 1000,
            count: 0,
            image1: '../img/logitech1.jpg',
            image2: '../img/logitech2.jpg',
            image3: '../img/logitech3.jpg',
        },
        {
            id_product: 321,
            product_name: 'Монитор',
            description: 'LG 24MK430H',
            price: 22400,
            count: 0,
            image1: '../img/lg1.jpg',
            image2: '../img/lg2.jpg',
            image3: '../img/lg3.jpg',
        },
    ]
}

const basket = {
    goods: [
    ],
    countBasketPrice() {
        if (this.goods.length > 0) {
            return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.count, 0)
        }
    }
}

function renderTemplate(template) {
    shop.insertAdjacentHTML('beforeend', `<h2 class="${template}Title">${template == 'catalog' ? 'Каталог' : 'Корзина'}</h2><div id="${template}"></div>`)
    document.querySelector(`.${template}Title`).style.display = `${template == 'catalog' ? 'block' : 'none'}`
    document.getElementById(`${template}`).style.display = `${template == 'catalog' ? 'flex' : 'none'}`
    document.getElementById(`${template}`).style.flexWrap = 'wrap'
    template == 'catalog' ? show('catalog') : show('cart')
    shop.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-dark" id="goTo${template == 'catalog' ? 'Cart' : 'Catalog'}">Перейти в ${template == 'catalog' ? 'корзину' : 'каталог'}</button>`)
    document.querySelector(`#goTo${template == 'catalog' ? 'Cart' : 'Catalog'}`).addEventListener('click', toggle)
    document.querySelector(`#goTo${template == 'catalog' ? 'Cart' : 'Catalog'}`).style.display = `${template == 'catalog' ? 'block' : 'none'}`
}

renderTemplate('catalog')
renderTemplate('cart')

function toggle(event) {
    if (event.target == goToCatalog) {
        document.querySelector('.catalogTitle').style.display = 'block'
        document.querySelector('.cartTitle').style.display = 'none'
        catalog.style.display = 'flex'
        cart.style.display = 'none'
        goToCart.style.display = 'block'
        goToCatalog.style.display = 'none'
    } else {
        document.querySelector('.catalogTitle').style.display = 'none'
        document.querySelector('.cartTitle').style.display = 'block'
        catalog.style.display = 'none'
        cart.style.display = 'flex'
        goToCart.style.display = 'none'
        goToCatalog.style.display = 'block'
    }
}

function show(template) {
    let obj = null
    if (template == 'cart') {
        template = cart
        obj = basket
    } else {
        template = catalog
        obj = products
    }
    if (obj.goods.length == 0) {
        template.innerText = `${obj == basket ? 'Корзина пуста' : 'Каталог пуст'}`
    } else {
        template.innerText = ''
        for (let i = 0; i < obj.goods.length; i++) {
            template.insertAdjacentHTML(
                'beforeend',
                `<div class="card m-3" style="min-width: 300px;">
                <div class="card-body">
                <h5>${obj.goods[i].product_name}</h5>
                <p>${obj.goods[i].description}</p>
                <p>Цена: ${obj.goods[i].price}</p>
                ${obj == basket ? '<p>Количество: '+ obj.goods[i].count +'</p>' : '\r'}
                </div>
                <div class="card-footer d-flex justify-content-between">
                <button type="button" class="btn btn-dark" id="${obj == basket ? 'remove' : 'image'}" data-id_product=${obj.goods[i].id_product}>${obj == basket ? 'Убрать' : 'Посмотреть'}</button>
                <button type="button" class="btn btn-dark" id="buy" data-id_product=${obj.goods[i].id_product}>${obj == basket ? 'Добавить' : 'Купить'}</button>
                </div>
            </div>`)
        }
        document.querySelectorAll('#buy').forEach(el => {
            el.addEventListener('click', addGood)
        })
        if (obj == basket) {
            document.querySelectorAll('#remove').forEach(el => {
                el.addEventListener('click', removeGood)
            })
        }
    }
}

function clearCatalog() {
    products.goods = []
    show('catalog')
}

function addGood(element) {
    const product = products.goods.find(item => item.id_product == element.target.dataset.id_product)
    product.count++
    if (!basket.goods.includes(product)) {
        basket.goods.push(product)
    }
    show('cart')
}

function removeGood(element) {
    const product = products.goods.find(item => item.id_product == element.target.dataset.id_product)
    if (product.count <= 1) {
        product.count--
        const deleteItem = basket.goods.indexOf(product)
        basket.goods.splice(deleteItem, 1)
    } else {
        product.count--
    }
    show('cart')
}

document.querySelectorAll('#image').forEach(el => {
    el.addEventListener('click', e => {
        const modal = document.querySelector('.modal-content')
        const product = products.goods.find(item => item.id_product == e.target.dataset.id_product)
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
        let src = product.image1
        img.src = src
        img.style.height = '50vh'
        imgWrapper.appendChild(img)
        imgWrapper.addEventListener('click', (e) => {
            if (e.target != img) {
                imgWrapper.style.display = 'none'
            } else {
                switch (src) {
                    case product.image1:
                        img.src = product.image2
                        src = product.image2
                        break
                    case product.image2:
                        img.src = product.image3
                        src = product.image3
                        break
                    case product.image3:
                        img.src = product.image1
                        src = product.image1
                        break
                }
            }
        })
    })
})





