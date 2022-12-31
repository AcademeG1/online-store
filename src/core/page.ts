import products from '../products.json'
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
abstract class Page {
  private container: HTMLElement;
  private id: string;

  constructor (id: string) {
    this.id = id;
    this.container = document.querySelector('.main') as HTMLElement;
  }

  createNewElement (tagName: string, className: string, idName?: string, text?: string): HTMLElement {
    const element = document.createElement(tagName);
    if (className !== '') {
      element.className = className;
    }
    if (idName != null) {
      if (idName !== '') {
        element.id = idName;
      }
    }
    if (text != null) {
      element.innerText = text;
    }
    return element;
  }

  render (products: Product[], ids: string): HTMLElement {
    return this.container;
  }
}

export default Page;