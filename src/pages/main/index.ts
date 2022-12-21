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
    products.forEach((item, index) => {
      this.prodElement.id = `${index}product`; // присваиваем каждой карточке id
      card.render(products[index], `${index}product`); // генерация внутри каждоый карточки (передаю путь к нужному обьекту, и id карточки)
      this.container.append(this.prodElement?.cloneNode(true)); // копирование ноды с картой и добаввление ее в контейнер
    });
    // document.querySelector('.products__container')?.firstChild?.remove();
    return this.container;
  }
}

export default MainPage;