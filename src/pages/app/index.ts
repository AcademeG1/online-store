// тут будет собираться все приложение в одно
import MainPage from '../main';
export const enum PageIds {
  basket = 'basket-page',
  product = 'product-page',
  StatisticsPage = 'statistics-page',
}

class App {
  private mainPage: MainPage;
  // private container: HTMLElement;
  constructor () {
    this.mainPage = new MainPage();
  }

  run (): void {
    // this.mainPage.clear();
    this.mainPage.render();
    // console.log(this.container);
  }
}

export default App;
