import products from '../../products.json';
import MainPage, { Product } from '../main-page/main';

class FilterProducts {
  private id: string;
  private filterCheckBrand: HTMLInputElement[];
  private filterCheckCategory: HTMLInputElement[];
  private mainPage: MainPage;

  constructor (id: string) {
    this.id = id;
    this.filterCheckBrand = [];
    this.filterCheckCategory = [];
    this.mainPage = new MainPage('search');
  }

  checkOption (): void {
    console.log('zashol')
    const checkboxesBrand = Array.from(document.getElementsByName('brand')) as HTMLInputElement[];
    const checkboxesCategory = Array.from(document.getElementsByName('category')) as HTMLInputElement[];
    console.log(checkboxesCategory)
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

  getFilter (): Product[] {
    const arrCheckedRus: string[] = [];
    const arrChecked = [...this.filterCheckBrand, ...this.filterCheckCategory];
    console.log('arrChecked');
    console.log(arrChecked);
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
      return arr.filter(item => arrCheckedRus.includes(item.brand));
    }

    if (this.filterCheckBrand.length === 0 && this.filterCheckCategory.length === 0) {
      this.mainPage.render(products, 'search');
      return products
    }

    console.log(arr)
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
