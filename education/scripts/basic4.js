document.getElementById(1).addEventListener('click', () => {
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
})




document.getElementById(2).addEventListener('click', () => {
    const Basket = {
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
          return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
        }
      }
    
      console.log(Basket.countBasketPrice())
})