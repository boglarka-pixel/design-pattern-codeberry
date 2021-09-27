'use strict';

class Product {
    constructor(name, discription, price) {
        this.name = name;
        this.discription = discription;
        this.price = price;
    }
    show() {
        console.log(this.name);
        console.log(this.discription);
        console.log(this.price);
    }
}

const pro1 = new Product('DisCatcher Target', 'a chain grid that catches fast and slow putts, heavy and light discs like no other target', 399);

pro1.show();