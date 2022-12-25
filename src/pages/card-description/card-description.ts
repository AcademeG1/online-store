import Description from '../../core/description';
import products from '../../products.json';

class CardDescriptionPage extends Description {
  private card: HTMLElement;
  private ids: number;
  private itemTitle: HTMLElement;

  constructor (ids: string) {
    super(ids);
    this.ids = parseInt(ids);
    this.ids++;
    this.card = document.getElementById('main-id') as HTMLElement; // если добавление после ноды, но текст сьезжает за футер
    this.itemTitle = document.querySelector('.item-title') as HTMLElement;
    // this.card = document.body;
  }

  render (): HTMLElement {
    console.log(this.ids)
    this.card.append(this.createElement('div', `card${this.ids} title`, `${products.filter(elem => elem.id === this.ids)[0].title}`));
    this.card.append(this.createElement('div', `card${this.ids} description`, `${products.filter(elem => elem.id === this.ids)[0].description}`));
    this.card.append(this.createElement('div', `card${this.ids} price`, `${products.filter(elem => elem.id === this.ids)[0].price}`));
    this.card.append(this.createElement('div', `card${this.ids} rating`, `${products.filter(elem => elem.id === this.ids)[0].rating}`));
    this.card.append(this.createElement('div', `card${this.ids} brand`, `${products.filter(elem => elem.id === this.ids)[0].brand}`));
    this.card.append(this.createElement('div', `card${this.ids} category`, `${products.filter(elem => elem.id === this.ids)[0].category}`));
    this.card.append(this.createElement('div', `card${this.ids} duration`, `${products.filter(elem => elem.id === this.ids)[0].duration} минут`));
    this.card.append(this.createElement('div', `card${this.ids} amount`, `${products.filter(elem => elem.id === this.ids)[0].amount} чел.`));
    this.card.append(this.createElement('div', `card${this.ids} old`, `${products.filter(elem => elem.id === this.ids)[0].old} лет`));
    products.filter(elem => elem.id === this.ids)[0].images.forEach((item) => {
      const image = document.createElement('img');
      image.src = item;
      image.className = `imageCard${this.ids}`
      this.card.append(image);
    });
    this.itemTitle.innerText = products.filter(elem => elem.id === this.ids)[0].title; // создание в ветке роутинга, нового названия
    return this.card;
  }
}

export default CardDescriptionPage;