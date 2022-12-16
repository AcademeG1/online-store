import products from "../src/products.json";
import './scss/base.scss'
console.log(products)

let p = document.createElement('p');
let br = document.createElement('br');
p.className = 'test-P';
for (let i = 0; i < products.length; i++) {
    p.innerText += `${i}) ${products[i].title}`;
    document.body.append(p);
    p.append(br);
}
console.log(typeof p)