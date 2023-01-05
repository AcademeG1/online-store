import products from '../../products.json';
import { Product } from '../main-page/main';

class FilterProducts {
  private readonly id: string;
  private readonly FilterCheck: Product[];

  constructor (id: string) {
    this.id = id;
    this.FilterCheck = [];
  }

  checkOption (): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((check) => {
      check.addEventListener('change', (event) => {
        const id = check.getAttribute('id') as string;
        const name = check.getAttribute('name') as string;

        console.log('имя', name)
        console.log('айди', id);

        // получаю значение выбранного чека
        const labels = document.querySelectorAll('label');
        labels.forEach((label) => {
          if (label.htmlFor === id) {
            const labelName = label.textContent?.toLowerCase() as string;
            console.log(labelName);
            this.getCheck(id, name, products, labelName);
          }
        })
        this.dublicateCheck(this.FilterCheck);
        // this.filterProd(this.FilterCheck, name);
      })
    })
  }

  getCheck (id: string, nameCategory: string, arr: Product[], labelName: string): void {
    arr.forEach((product) => {
      const categoryName = product.category.toLowerCase();
      const brandName = product.brand.toLowerCase();
      const ageValue = product.old;
      const timeValue = product.duration;

      if (nameCategory === 'category') {
        if (labelName === categoryName) {
          this.FilterCheck.push(product);
        }
      } else if (nameCategory === 'old') {
        if ((labelName === 'до 5 лет' && ageValue <= 5) ||
            (labelName === 'до 7 лет' && ageValue <= 7) ||
            (labelName === 'до 12 лет' && ageValue <= 12) ||
            (labelName === 'до 15 лет' && ageValue <= 15) ||
            (labelName === 'более 16 лет' && ageValue > 15)) {
          this.FilterCheck.push(product);
        } console.log(nameCategory)
      } else if (nameCategory === 'duration') {
        if ((labelName === 'до 15 минут' && timeValue <= 15) ||
            (labelName === 'до 30 минут' && timeValue <= 30) ||
            (labelName === 'до 60 минут' && timeValue <= 60) ||
            (labelName === 'до 120 минут' && timeValue <= 120) ||
            (labelName === 'от 2 часов' && timeValue > 120)) {
          this.FilterCheck.push(product);
        }
      } else if (nameCategory === 'brand') {
        if (labelName === brandName) {
          this.FilterCheck.push(product);
        }
      }
    })
  }

  dublicateCheck (arr: Product[]): Product[] {
    const uniqSet = new Set(arr);
    console.log([...uniqSet]);
    return [...uniqSet];
  }

  filterProd (arr: Product[], nameCategory: string): Product[] {
    // arr.filter((product) =>);
    // .filter((product) => )
    // .filter((product) => )
    // .filter((product) =>)
    console.log(arr);
    return arr;
  }
}

export default FilterProducts;
