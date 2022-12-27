import products from '../products.json'
export interface Product {
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

abstract class Search {
  private mainContainer: HTMLElement;
  private mainContent: HTMLElement;
  private footer: HTMLElement;

  constructor () {
    this.mainContainer = document.querySelector('.main') as HTMLElement;
    this.mainContent = document.body; // это просто присвоение на приколе, ниже переназначено на .main__content
    this.footer = document.querySelector('.footer') as HTMLElement;
  }

  createNewElement (tagName: string, className: string, idName?: string, text?: string): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    if (idName != null) {
      element.id = idName;
    }
    if (text != null) {
      element.innerText = text;
    }
    return element;
  }

  renderElements (arrEl: Product[]) {
    this.mainContent = document.querySelector('.products__container') as HTMLElement;
    console.log(this.mainContent);
    // console.log(arrEl);
    if (arrEl.length === 0) {
      const none = document.createElement('div');
      none.style.textAlign = 'center';
      none.style.width = '100%';
      none.style.fontSize = '24px';
      none.style.alignSelf = 'center';
      none.innerText = 'Таких игр нет :(';
      this.mainContent.append(none);
    } else {
      this.mainContent.innerHTML = '';
      arrEl.forEach((item, index) => {
        const element = document.createElement('a');
        element.id = `${item.id}product`;
        element.className = 'product__item';
        element.href = `#${item.id}product`;
        // const element = this.createNewElement('a', 'product__item', `${++index}product`); // создание карточки товара, ее контейнер
        const elementContent = this.createNewElement('div', 'product__item_content'); // создание оболочки элементов контейнера карты
        const imgElementContent = this.createNewElement('div', 'product_image'); // создание оболочки для картинки
        const img = document.createElement('img'); // создание картинки
        img.className = `${item.id}product`; // класс для картинки
        img.src = `${item.thumbnail}`; // путь для картинки
        imgElementContent.append(img); // добавление картинки в контейнер картинки (враппер)
        elementContent.append(imgElementContent, this.createNewElement('div', 'product_title', '', `${item.title}`), this.createNewElement('div', 'product_price button', '', `${item.price} руб`)); // добавление картинки, названия карточки (игры)  и ценник
        const productParams = this.createNewElement('div', 'product_params'); // создание контейнера для добавления параметров
        // наполнение контейнера параметрами
        // рейтинг
        const raiting = this.createNewElement('div', 'params__item raiting');
        const raitingImg = document.createElement('img');
        raitingImg.src = './img/icon-star.png';
        raitingImg.width = 20;
        raitingImg.height = 20;
        raitingImg.alt = 'Raiting';
        raiting.append(raitingImg);
        raiting.append(this.createNewElement('span', '', '', `${item.rating}`));
        // время
        const duration = this.createNewElement('div', 'params__item duration');
        const durationImg = document.createElement('img');
        durationImg.src = './img/icon-hourglass.png';
        durationImg.width = 20;
        durationImg.height = 20;
        durationImg.alt = 'Duration';
        duration.append(durationImg);
        duration.append(this.createNewElement('span', '', '', `${item.duration}`));
        // количество игроков
        const players = this.createNewElement('div', 'params__item players');
        const playersImg = document.createElement('img');
        playersImg.src = './img/icon-hourglass.png';
        playersImg.width = 20;
        playersImg.height = 20;
        playersImg.alt = 'Duration';
        players.append(playersImg);
        players.append(this.createNewElement('span', '', '', `${item.amount}`));

        productParams.append(raiting, duration, players);
        elementContent.append(productParams); // добавление в карточку, контейнера с параметрами
        element.append(elementContent); // добавление оболочки всех элементов со всеми элементами в главный элемент
        this.mainContent.append(element); // добавление на страницу
      });
    }
    return this.mainContainer;
  }
}

export default Search;