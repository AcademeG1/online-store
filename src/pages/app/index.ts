// тут будет собираться все приложение в одно
import MainPage, { arrayId } from '../main-page/main';
import Page from '../../core/page';
import Description from '../../core/description';
import CardDescriptionPage from '../card-description/card-description';
import SearchProducts from '../main-search/mainSearch';
class App {
  private mainPage: MainPage;
  private searchProducts: SearchProducts;

  static newRenderPage (idPage: string): void {
    document.querySelector('.sort-info')?.remove();
    document.querySelector('.two-columns')?.remove();
    console.log(idPage)

    let page: Page | null | Description = null;
    if (arrayId?.includes(String(idPage))) {
      page = new CardDescriptionPage(String(idPage)); // тут должен вернуться html элемент готовой карточки
    } else if (idPage === 'mainPage') {
      page = new MainPage(idPage);
    }

    if (page) {
      window.location.hash = `#${idPage}`;
      const pageHTML = page.render() as HTMLElement;
      try {
        document.querySelector('.header')?.after(pageHTML);
      } catch (all) {
        console.log('Все под контролем) отработал и хорошо)')
      }
    }
  }

  constructor () {
    this.mainPage = new MainPage('main-page');
    this.searchProducts = new SearchProducts();
  }

  private enableRouteChange (): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.newRenderPage(hash);
      // console.log('сработал')
    });
  }

  run (): void {
    this.mainPage.render();
    this.searchProducts.searchProduct();
    // arrayId.forEach((item, index) => { // функция добавления ссылок каждому элементу, нужно куда-то перенести, потому что при повторном нажатии, он не генерирует
    //   document.getElementById(item)?.addEventListener('click', () => {
    //     App.newRenderPage(item); // вроде уже не надо, но пускай будет
    //   })
    // })
    this.enableRouteChange();
  }
}

export default App;
