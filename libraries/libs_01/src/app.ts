// import _ from 'lodash';

// console.log(_.shuffle([1,2,3,4,5]));

// // using declare
// declare var GLOBAL: any;

// console.log(GLOBAL);

import { Product } from './product.model';
const products = [{title: 'A carpet', price: 29.99}, {title: 'A book', price: 10.99}];
const p1 = new Product('A book', 12.99);
const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
})
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
console.log(p1.getInformation());