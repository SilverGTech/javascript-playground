// let main = document.getElementById('main');

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.quantity = 23003210132;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}









let inventory = [
    new Item('Apple', 0.99),
    new Item('Banana', 0.59),
    new Item('Cherry', 1.99),
    new Item('Date', 2.99),
]

inventory.forEach((item) => {
    console.log(typeof item);
    console.log(item._name);
    console.log(item._price);
    console.log(item.quantity);
})


