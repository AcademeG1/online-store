interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  brand: string
  category: string
  duration: number
  amount: number
  old: number
  thumbnail: string
  images: string[]
}

class Cart {
  private allCart: [{ 'id': string, 'count': number }];
  private mainWrap: HTMLElement;
  private main: HTMLElement;
  private itemTitle: HTMLElement;

  constructor () {
    if (localStorage.getItem('Cart') == null || localStorage.getItem('Cart')?.length === 0) {
      this.allCart = [{ id: '0', count: 0 }];
      this.removeCart('0');
    } else {
      this.allCart = JSON.parse(localStorage.getItem('Cart') || '');
    }
    this.mainWrap = document.querySelector('.main__wrapper') as HTMLElement;
    this.itemTitle = document.querySelector('.item-title') as HTMLElement;
    this.main = document.querySelector('.main') as HTMLElement;
  }

  addCart (id: string, counter: number): [{ 'id': string, 'count': number }] {
    this.allCart.push({ id: id, count: counter });
    console.log(this.allCart)
    return this.allCart;
  }

  removeCart (id: string): void {
    this.allCart.forEach((item, index) => {
      if (item.id === id) {
        this.allCart.splice(index, 1)
      }
    })
  }

  viewCountCart (): void {
    const counter = document.querySelector('.header__shoping-cart_count') as HTMLElement;
    localStorage.setItem('Cart', JSON.stringify(this.allCart));
    // if (localStorage.getItem('Cart') !== null || localStorage.getItem('Cart')?.length !== 0) {
    //     this.allCart = JSON.parse(localStorage.getItem('Cart') || ''); // в процессе, чтобы значение в счетчике обновлялось автоматически
    // }
    counter.innerText = `${this.allCart.length}`;
  }

  render (prod: Product[], str: string): HTMLElement {
    const local = localStorage.getItem('Cart');
    if (local !== null) {
      this.allCart = JSON.parse(local);
    }
    const containerCart: HTMLElement = document.createElement('div');
    this.allCart.forEach((element) => { // создание карточек в корзине
      const title = document.createElement('div');
      title.className = 'titleCard';
      let id = Number(element.id);
      title.innerText = `${prod[--id].title}`
      containerCart.append(title);
      this.itemTitle.innerText = 'Корзина';
    });
    // const found = this.allCart.some(item => prod.includes());
    // console.log(found)
    this.mainWrap.append(containerCart); // добавление контейнера корзины на страницу
    this.main.append(this.mainWrap);
    return this.main;
  }
}

export default Cart;