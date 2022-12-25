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
// abstract
class Card {
  private card: HTMLElement;
  private productImage: HTMLElement;
  private productTitle: HTMLElement;
  private productPrice: HTMLElement;
  private productRaiting: HTMLElement;
  private productDuration: HTMLElement;
  private productPlayers: HTMLElement;

  constructor () {
    this.card = document.body;
    this.productImage = document.querySelector('.product_image') as HTMLElement;
    this.productTitle = document.querySelector('.product_title') as HTMLElement;
    this.productPrice = document.querySelector('.product_price') as HTMLElement;
    this.productRaiting = document.querySelector('.raiting > span') as HTMLElement;
    this.productDuration = document.querySelector('.duration > span') as HTMLElement;
    this.productPlayers = document.querySelector('.players > span') as HTMLElement;
  }

  render (path: Product, classCard: string): HTMLElement {
    // обьект который нужен и класс карточки, которому надо присвоить
    this.card = document.getElementById(`${classCard}`) as HTMLElement; // получаем карточку по ид
    // this.card.append(); // добавление названия
    this.productImage.innerHTML = '';// очищаю поле для картинки
    this.productTitle.innerHTML = '';
    this.productPrice.innerHTML = '';
    this.productRaiting.innerHTML = '';
    this.productDuration.innerHTML = '';
    this.productPlayers.innerHTML = '';
    const img = document.createElement('img'); // создание элемента img
    console.log(path);
    img.className = classCard; // присваиваем класс который передаем (id карточки = class картинки)
    img.src = path.thumbnail; // присваиваю тегу img ссылку для картинки
    console.log(this.productImage);
    this.productImage.append(img); // Добавяю картинку в блок
    this.productTitle.append(path.title);
    this.productPrice.append(`${path.price} руб`);
    this.productRaiting.append(`${path.rating}`);
    this.productDuration.append(`${path.duration}`);
    this.productPlayers.append(`${path.amount}`);
    console.log(this.productImage);
    console.log(classCard)
    return this.card;
  }
}

export default Card;