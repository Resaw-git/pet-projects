const shop = document.getElementById('shop')
const total = document.createElement('div')
const example = `
<div class="accordion w-100" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Состав корзины
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body d-flex justify-content-center flex-wrap"></div>
            <div class="d-flex w-100 justify-content-center">
                <button class="btn btn-dark m-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Далее
                </button>
            </div>
        </div>
    </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Адрес доставки
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Эл. адрес</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="inputPassword4">
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Адрес</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Проспект Ленина">
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Адрес 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Квартира">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Город</label>
        <input type="text" class="form-control" id="inputCity" placeholder="Брянск">
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Область</label>
        <select id="inputState" class="form-select">
          <option selected>Выберите...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Индекс</label>
        <input type="text" class="form-control" id="inputZip">
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Проверить меня
          </label>
        </div>
      </div>
    </form>
        <div class="d-flex w-100 justify-content-center">
        <button class="btn btn-dark m-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Далее
        </button>
    </div>
       </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Коментарий
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Оставьте коментарий</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
        <div class="d-flex w-100 justify-content-center">
        <button class="btn btn-dark m-2">
            Оформить заказ
        </button>
    </div>
        </div>
    </div>
  </div>
</div>
`

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
    },
    countBasketGoods() {
        if (this.goods.length > 0) {
            return this.goods.reduce((total, item) => total += item.count, 0)
        }
    }
}

function renderTemplate(template) {
    shop.insertAdjacentHTML('beforeend', `<h2 class="${template}Title">${template == 'catalog' ? 'Каталог' : 'Корзина'}</h2><div id="${template}" class="w-100 justify-content-center"></div>`)
    document.querySelector(`.${template}Title`).style.display = `${template == 'catalog' ? 'block' : 'none'}`
    document.getElementById(`${template}`).style.display = `${template == 'catalog' ? 'flex' : 'none'}`
    document.getElementById(`${template}`).style.flexWrap = 'wrap'
    template == 'catalog' ? show('catalog') : show('cart')
    document.querySelector('.modal-footer').insertAdjacentHTML('afterbegin', `<button type="button" class="btn btn-dark" id="goTo${template == 'catalog' ? 'Cart' : 'Catalog'}">Перейти в ${template == 'catalog' ? 'корзину' : 'каталог'}</button>`)
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
        total.innerText = ''
        template.innerText = `${obj == basket ? 'Корзина пуста' : 'Каталог пуст'}`
    } else {
        template.innerText = ''
        if (obj == basket) {
            template.innerHTML = example
            const accordionBody = document.querySelector('.accordion-body')
            template = accordionBody
            template.innerText = ''
        }
        for (let i = 0; i < obj.goods.length; i++) {
            template.insertAdjacentHTML(
                'beforeend',
                `<div class="card m-3" style="min-width: 300px;">
                    <div class="card-body">
                    <h5>${obj.goods[i].product_name}</h5>
                    <p>${obj.goods[i].description}</p>
                    <p>Цена: ${obj.goods[i].price}</p>
                    ${obj == basket ? '<p>Количество: ' + obj.goods[i].count + '</p>' : '\r'}
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
            total.innerText = `В корзине ${basket.countBasketGoods()} товаров на сумму ${basket.countBasketPrice()} рублей`
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
        document.addEventListener('keydown', (e) => {
            if (e.code == 'ArrowLeft') {
                switch (src) {
                    case product.image1:
                        img.src = product.image3
                        src = product.image3
                        break
                    case product.image2:
                        img.src = product.image1
                        src = product.image1
                        break
                    case product.image3:
                        img.src = product.image2
                        src = product.image2
                        break
                }
            }
            if (e.code == 'ArrowRight') {
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

document.querySelector('.modal-footer').insertAdjacentElement('afterbegin', total)


