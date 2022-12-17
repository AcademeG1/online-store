import products from '../src/products.json'
import './scss/base.scss'
console.log(products)

const p = document.createElement('p')
const br = document.createElement('br')
p.className = 'test-P'
for (let i = 0; i < products.length; i++) {
  p.innerText += `${i}) ${products[i].title}`
  document.body.append(p)
  p.append(br)
}

const b = 5

function info (k: number): void {
  console.log(k)
}

info(b)
