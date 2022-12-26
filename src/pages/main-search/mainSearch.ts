import products from '../../products.json'
import Search, { Product } from '../../core/search';

class SearchProducts extends Search {
  private searchBar: HTMLElement;

  constructor () {
    super();
    this.searchBar = document.getElementById('searchBar') as HTMLInputElement;
  }

  searchProduct (): void {
    this.searchBar.addEventListener('keyup', (event) => {
      const target = event.target as HTMLSelectElement;
      const searchString = target.value.toLowerCase();

      const resultRender = products.filter((product) => {
        return product.title.toLowerCase().includes(searchString);
      })
      this.render(resultRender);
    })
  }

  render (searchResult: Product[]): void {
    const productContainer = document.querySelector('.products__container') as HTMLElement;
    productContainer.innerHTML = '';
    const arr: Product[] = [];
    searchResult.forEach((item, index) => {
      arr.push(item);
    })
    this.renderElements(arr);
  }
}

export default SearchProducts;