import Description from '../../core/description';
import products from '../../products.json';

class CardDescriptionPage extends Description {
  private card: HTMLElement;
  private ids: number;
  private itemTitle: HTMLElement;
  private header: HTMLElement;
  private body: HTMLElement;
  private footer: HTMLElement;
  private main: HTMLElement;
  private mainWrap: HTMLElement;

  constructor (ids: string) {
    super(ids);
    this.ids = parseInt(ids);
    this.ids--;
    this.card = document.getElementById('main-id') as HTMLElement; // если добавление после ноды, но текст сьезжает за футер
    this.itemTitle = document.querySelector('.item-title') as HTMLElement;
    this.mainWrap = document.querySelector('.main__wrapper') as HTMLElement;// сохранение main-wrapper
    this.header = document.querySelector('.header') as HTMLElement;
    this.main = document.querySelector('.main') as HTMLElement;
    this.footer = document.querySelector('.footer') as HTMLElement;
    this.body = document.body;
  }

  render (): HTMLElement {
    this.body.innerHTML = ''; // очистка боди, для новго заполнения
    this.body.append(this.header); // добавление сохраненного хедера на страницу
    this.mainWrap.innerHTML = ''; // очистка всего что в мэин
    this.mainWrap.append(this.card); // добавление строки роутинга
    // наполнение страницы нужными элементами (переделать под цикл в будущем)
    this.mainWrap.append(document.createElement('span').textContent = 'Название: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} titleC`, `${products.filter(elem => elem.id === this.ids)[0].title}`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Описание: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} descriptionC`, `${products.filter(elem => elem.id === this.ids)[0].description}`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Цена: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} priceC`, `${products.filter(elem => elem.id === this.ids)[0].price}`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Рейтинг: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} ratingC`, `${products.filter(elem => elem.id === this.ids)[0].rating}`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Производитель: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} brandC`, `${products.filter(elem => elem.id === this.ids)[0].brand}`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Категория: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} categoryC`, `${products.filter(elem => elem.id === this.ids)[0].category}`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Время игры: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} durationC`, `${products.filter(elem => elem.id === this.ids)[0].duration} минут`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Количество игроков: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} amountC`, `${products.filter(elem => elem.id === this.ids)[0].amount} чел.`));
    this.mainWrap.append(document.createElement('br'));
    this.mainWrap.append(document.createElement('span').textContent = 'Возраст: ');
    this.mainWrap.append(this.createElement('span', `card${this.ids} oldC`, `${products.filter(elem => elem.id === this.ids)[0].old} лет`));
    this.mainWrap.append(document.createElement('br'));
    products.filter(elem => elem.id === this.ids)[0].images.forEach((item) => {
      const image = document.createElement('img');
      image.src = item;
      image.className = `imageCard${this.ids}`
      this.mainWrap.append(image);
    });
    // добавление названия в роутинг на странице
    this.itemTitle.innerText = products.filter(elem => elem.id === this.ids)[0].title; // создание в ветке роутинга, нового названия
    this.body.append(this.main); // добавление мэин в боди
    this.body.append(this.footer); // добавление футера после мэин в боди
    return this.body; // возвращаем готовый боди
  }
}

export default CardDescriptionPage;