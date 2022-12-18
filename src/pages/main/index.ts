import products from '../../products.json';
import Card from '../../core/card';
const card = new Card();
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

class MainPage {
  private container: HTMLElement;
  private productArr: Product[];
  private prodElement: HTMLElement;
  constructor () {
    this.productArr = products;
    this.container = document.querySelector('.products__container') as HTMLElement; // сюда складываются все итемы
    this.prodElement = document.querySelector('.product__item') as HTMLElement; // итемы которые мы получачем с внутренними элементами
  }

  clear (): void {
    this.container.innerHTML = '';
  }

  render (): HTMLElement {
    this.clear();// метод очищения родителя от всех карточек
    for (let i = 0; i < products.length; i++) { // цикл создания карточек
      this.prodElement.id = `${i}product`; // присваиваем каждой карточке id
      this.container.append(this.prodElement?.cloneNode(true)); // копирование ноды с картой и добаввление ее в контейнер
      card.render(products[i], `${i}product`); // генерация внутри каждоый карточки (передаю путь к нужному обьекту, и id карточки)
    }
    document.querySelector('.products__container')?.firstChild?.remove();
    return this.container;
  }
}

export default MainPage;