// тут будет собираться все приложение в одно
import MainPage from '../main';
import products from '../../products.json'
import CardDescriptionPage from '../card-description/card-description';
import Description from '../../core/description';

export const enum PageIds {
  basket = 'basket-page',
  product = 'product-page',
  StatisticsPage = 'statistics-page',
}

class App {
  private mainPage: MainPage;
  // private cardDescriptionPage:
  private prodItem = document.getElementsByClassName('product__item');
  static arrId: string[];

  // Description = astract класс, который обобщенно описывает страницу
  // cardDescriptionPage = класс который описывает определенную страницу, каждой карточки, у каждой должен быть метод render

  static newRenderPage (idPage: string | undefined): void {
    document.querySelector('.sort-info')?.remove();
    document.querySelector('.two-columns')?.remove();
    if (idPage === undefined) {
      console.log('Косяк!!')
    }

    let page: Description | null = null;
    if (App.arrId?.includes(String(idPage))) {
      page = new CardDescriptionPage(String(idPage)); // тут должен вернуться html элемент готовой карточки
    }

    if (page != null) {
      const pageHTML = page.render();
      document.body.append(pageHTML);
    }
  }

  constructor () {
    this.mainPage = new MainPage();
    App.arrId = [];
  }

  run (): void {
    this.mainPage.render();
    Array.from(document.querySelectorAll('.product__item')).forEach((elem) => { App.arrId.push(elem.id) }); // нужно получить массив id (0product)
    for (let i = 0; i < this.prodItem.length; i++) {
      this.prodItem.item(i)?.addEventListener('click', () => {
        App.newRenderPage(this.prodItem.item(i)?.id);
      })
    }
  }
}

export default App;
