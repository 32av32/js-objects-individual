const market = {
    goods: [
        {
            name: 'OnePlus 9',
            price: 40000,
        },
        {
            name: 'Samsung S23',
            price: 90000,
        },
        {
            name: 'IPhone 14',
            price: 100000,
        },
        {
            name: 'Asus ZenFone',
            price: 60000,
        }
    ],
    userName: 'Name',
    balance: 200000,
    cart: [],
    order: [],
    setName(name) {
        this.userName = name
    },
    printGoods() {
        for (let index in this.goods) {
            console.log(index, this.goods[index])
        }
    },
    addBalance(value) {
        this.balance += value
    },
    addToCart(index, count) {
        this.cart.push({name: this.goods[index].name, price: this.goods[index].price, count})

    },
    removeFromCart(index) {
        this.cart.splice(index, 1)
    },
    buy() {
        let totalPrice = 0
        for (let item of this.cart) {
            totalPrice += item.price * item.count
        }
        if (totalPrice > this.balance) {
            console.log('У вас недостаточно средств')
        } else {
            this.order = [...this.order, ...this.cart]
            this.cart.splice(0)
            this.balance = this.balance - totalPrice
        }
    },
    printStatus() {
        let cartStatus = this.cart.map(i => `name: ${i.name}, price: ${i.price}, count: ${i.count}\n`)
        let orderStatus = this.order.map(i => `name: ${i.name}, price: ${i.price}, count: ${i.count}\n`)
        console.log(
            `Your balance: ${this.balance},
            Корзина: ${cartStatus || 'Empty'},
            Заказ: ${orderStatus || 'Empty'}.
            `
        )
    }
}