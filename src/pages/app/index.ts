// тут будет собираться все приложение в одно
import MainPage, { arrayId } from '../main-page/main';
import Page from '../../core/page';
import Description from '../../core/description';
import CardDescriptionPage from '../card-description/card-description';
import SearchProducts from '../main-search/mainSearch';
import nouislider from '../../nouislider';
import ErrorPage from '../error/error';
import products from '../../products.json';
import Cart from '../../core/cart';
import FilterProducts from '../main-search/mainFilter';
class App {
  private mainPage: MainPage;
  private searchProducts: SearchProducts;
  private cart: Cart;
  // private filterProducts: FilterProducts;

  static newRenderPage (idPage: string): void {
    document.querySelector('.sort-info')?.remove();
    document.querySelector('.two-columns')?.remove();
    console.log(idPage)

    let page: Page | null | Description | Cart = null;
    if (arrayId?.includes(String(idPage))) {
      page = new CardDescriptionPage(String(idPage)); // тут должен вернуться html элемент готовой карточки
    } else if (idPage === 'mainPage') {
      page = new MainPage(idPage);
    } else if (idPage === 'cart') {
      page = new Cart();
    } else {
      page = new ErrorPage('error');
    }

    if (page) {
      window.location.hash = `#${idPage}`;
      const pageHTML = page.render(products, 'mainPage') as HTMLElement;
      try {
        document.querySelector('.header')?.after(pageHTML);
        nouislider();
      } catch (all) {
        console.log('Все под контролем) отработал и хорошо)')
      }
    }
  }

  constructor () {
    this.mainPage = new MainPage('mainPage');
    this.searchProducts = new SearchProducts();
    this.cart = new Cart();
    // this.filterProducts = new FilterProducts('filter');
  }

  private enableRouteChange (): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.newRenderPage(hash);
    });
  }

  run (): void {
    window.location.hash = '';
    this.searchProducts.searchProduct();
    // this.filterProducts.checkOption();
    // this.mainPage.render(products, 'mainPage');
    // nouislider();
    // arrayId.forEach((item, index) => { // функция добавления ссылок каждому элементу, нужно куда-то перенести, потому что при повторном нажатии, он не генерирует
    //   document.getElementById(item)?.addEventListener('click', () => {
    //     App.newRenderPage(item); // вроде уже не надо, но пускай будет
    //   })
    // })
    this.enableRouteChange();
    window.location.hash = '#mainPage';
  }
}

export default App;
