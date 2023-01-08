import products from '../../products.json';
import MainPage, { Product } from '../main-page/main';

class FilterProducts {
  private id: string;
  private filterCheckBrand: HTMLInputElement[];
  private filterCheckCategory: HTMLInputElement[];
  private mainPage: MainPage;
  private arrSort: Product[];

  constructor (id: string) {
    this.id = id;
    this.filterCheckBrand = [];
    this.filterCheckCategory = [];
    this.mainPage = new MainPage('search');
    this.arrSort = [];
  }

  checkOption (): void {
    const checkboxesBrand = Array.from(document.getElementsByName('brand')) as HTMLInputElement[];
    const checkboxesCategory = Array.from(document.getElementsByName('category')) as HTMLInputElement[];

    checkboxesCategory.forEach(check => {
      check.addEventListener('change', () => {
        this.filterCheckCategory = checkboxesCategory.filter(item => item.checked);
        this.getFilter();
      })
    })

    checkboxesBrand.forEach(check => {
      check.addEventListener('change', () => {
        this.filterCheckBrand = checkboxesBrand.filter(item => item.checked);
        this.getFilter();
      })
    })
  }

  getSortOption (id: string): void {
    const selectOption = document.getElementById(id) as HTMLSelectElement;
    selectOption.addEventListener('change', (event) => {
      console.log('select', selectOption.value);
      if (this.arrSort.length === 0) {
        this.arrSort = products;
      }
      if (selectOption.value === 'raiting') {
        this.sortByRaiting(this.arrSort);
      }
      if (selectOption.value === 'min-price') {
        this.sortByMinPrice(this.arrSort);
      }
      if (selectOption.value === 'max-price') {
        this.sortByMaxPrice(this.arrSort);
      }
      if (selectOption.value === 'firstname') {
        this.sortByFirstName(this.arrSort);
      }
      if (selectOption.value === 'lastname') {
        this.sortByLastName(this.arrSort);
      }
    })
  }

  sortByFirstName (arr: Product[]): void {
    const sorted = arr.sort((a, b) => a.title > b.title ? 1 : -1);
    console.log('name', sorted);
    this.mainPage.render(sorted, 'search');
  }

  sortByLastName (arr: Product[]): void {
    const sorted = arr.sort((a, b) => a.title < b.title ? 1 : -1);
    console.log('lastname', sorted);
    this.mainPage.render(sorted, 'search');
  }

  sortByRaiting (arr: Product[]): void {
    const sorted = arr.sort((a, b) => {
      return b.rating - a.rating;
    });
    console.log('raiting', sorted);
    this.mainPage.render(sorted, 'search');
  }

  sortByMaxPrice (arr: Product[]): void {
    const sorted = arr.sort((a, b) => {
      return a.price - b.price;
    });
    console.log('maxprice', sorted);
    this.mainPage.render(sorted, 'search');
  }

  sortByMinPrice (arr: Product[]): void {
    const sorted = arr.sort((a, b) => {
      return b.price - a.price;
    });
    console.log('minprice', sorted);
    this.mainPage.render(sorted, 'search');
  }

  getFilter (): Product[] {
    const arrCheckedRus: string[] = [];
    const arrChecked = [...this.filterCheckBrand, ...this.filterCheckCategory];

    arrChecked.forEach(item => {
      arrCheckedRus.push(this.getCurrentLabelCategory(item.id));
      arrCheckedRus.push(this.getCurrentLabelBrand(item.id));
    })

    let arr: Product[] = [];
    if (this.filterCheckCategory.length > 0) {
      arr = products.filter(item => arrCheckedRus.includes(item.category));
    }

    if (this.filterCheckBrand.length > 0) {
      if (this.filterCheckCategory.length === 0) {
        arr = products.filter(item => arrCheckedRus.includes(item.brand));
      }
      console.log(arr.filter(item => arrCheckedRus.includes(item.brand)))
      this.mainPage.render(arr.filter(item => arrCheckedRus.includes(item.brand)), 'search');
      this.arrSort = arr;
      return arr.filter(item => arrCheckedRus.includes(item.brand));
    }

    if (this.filterCheckBrand.length === 0 && this.filterCheckCategory.length === 0) {
      this.mainPage.render(products, 'search');
      this.arrSort = products;
      return products
    }
    this.arrSort = arr;
    this.mainPage.render(arr, 'search');
    return arr
  }

  getCurrentLabelCategory (str: string): string {
    switch (str) {
      case 'adventures': return 'Приключения';
      case 'cards': return 'Карточная';
      case 'logic': return 'Головоломки';
      case 'strategy': return 'Стратегические игры';
      case 'economy': return 'Экономические игры';
      case 'detective': return 'Детективные игры';
      case 'travel': return 'Игры в дорогу';
      default: return 'Нет такой категории'
    }
  }

  getCurrentLabelBrand (str: string): string {
    switch (str) {
      case 'hw': return 'Hobby World';
      case 'magellan': return 'Magellan';
      case 'gaga': return 'GaGa Games';
      case 'mattel': return 'Mattel';
      case 'playlab': return 'PlayLab';
      case 'piatnik': return 'Piatnik';
      case 'rightgames': return 'Правильные игры';
      case '10kingdom': return 'Десятое королевство';
      case 'zvezda': return 'Zvezda';
      default: return 'Нет такого бренда'
    }
  }
}

export default FilterProducts;
