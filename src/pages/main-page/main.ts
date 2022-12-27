import Page from '../../core/page';
import products from '../../products.json';

export const arrayId: string[] = [];

class MainPage extends Page {
  private mainContainer: HTMLElement;
  private mainContent: HTMLElement;
  private footer: HTMLElement;
  // <div class="main__content">
  // <div class="products__container">

  constructor (id: string) {
    super(id);
    this.mainContainer = document.querySelector('.main') as HTMLElement;
    this.mainContent = document.body; // это просто присвоение на приколе, ниже переназначено на .main__content
    this.footer = document.querySelector('.footer') as HTMLElement;
  }

  render (): HTMLElement {
    const search = document.querySelector('.header__search') as HTMLElement; // показать поиск
    search.style.display = 'flex'; // показать поиск
    this.mainContainer.innerHTML = `
    <div class="wrapper main__wrapper">
        <!--"Хлебные крошки"-->
        <div class="breadcrumbs" id="main-id">
          <ul itemscope itemtype="#">
            <li itemprop="itemListElement" itemscope itemtype="#">
              <!-- <a href="/" id="mainPage" title="Главная" itemprop="item"> -->
              <a href="#mainPage" id="mainPage" style="cursor: pointer;">
                <span class="breadcrumbs__title" itemprop="name">Главная</span>
              </a>
              <meta itemprop="position" content="1" />
            </li>
            <li>
              <span class="arrow"></span>
            </li>
            <li class="item-title"></li>
          </ul>
        </div>
        <div class="sort-info">
          <h2>Настольные игры</h2>
          <!--Сортировка-->
          <div class="sort-view">
            <span сlass="sort-title">Сортировать:</span>
            <select name="sort-select" id="sort">
              <option value="min-price">по убыванию цены</option>
              <option value="max-price">по возрастанию цены</option>
              <option selected value="raiting">по популярности</option>
              <option value="firstname">по названию (А-Я)</option>
              <option value="lastname">по названию (Я-А)</option>
            </select>
          </div>
        </div>
        <div class="two-columns">
          <div class="main__sidebar">
            <div class="main__sidebar_wrapper">
              <!--Фильтрация по цене, noUislider-->
              <div class="filter-section filter-section_price">
                <div class="filter-section_title">Цена</div>
                <div class="filter-section_range">
                  <div class="range">
                    <div class="price range_from">
                      <span class="line-prefix">От</span>
                      <input id="input-price-from" type="number" value="0" min="0" max="263" step="10" />
                    </div>
                    <div class="price range_to">
                      <span class="line-prefix">До</span>
                      <input id="input-price-to" type="number" value="263" min="0" max="263" step="10" />
                    </div>
                  </div>
                  <div class="slider__wrap">
                    <div id="slider-price"></div>
                  </div>
                </div>
              </div>
              <!--Фильтрация по категориям-->
              <div
                class="filter-section filter-section_category"
                id="categories">
                <div class="filter-section_title">Категория</div>
                <div class="filter-option">
                  <input type="checkbox" name="category" id="adventures" />
                  <label for="adventures">Приключения</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="category" id="cards" />
                  <label for="cards">Карточная</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="category" id="logic" />
                  <label for="logic">Головоломки</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="category" id="strategy" />
                  <label for="strategy">Стратегические игры</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="category" id="economy" />
                  <label for="economy">Экономические игры</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="category" id="detective" />
                  <label for="detective">Детективные игры</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="category" id="travel" />
                  <label for="travel">Игры в дорогу</label>
                </div>
              </div>
              <!--Фильтрация по возрасту-->
              <div class="filter-section filter-section_old" id="old">
                <div class="filter-section_title">Возраст</div>
                <div class="filter-option">
                  <input type="checkbox" name="old" id="5" />
                  <label for="5">до 5 лет</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="old" id="7" />
                  <label for="7">до 7 лет</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="old" id="12" />
                  <label for="12">до 12 лет</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="old" id="15" />
                  <label for="15">до 15 лет</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="old" id="16" />
                  <label for="16">более 16 лет</label>
                </div>
              </div>
              <!--Фильтрация по продолжительности-->
              <div class="filter-section filter-section_duration" id="duration">
                <div class="filter-section_title">Продолжительность</div>
                <div class="filter-option">
                  <input type="checkbox" name="duration" id="15min" />
                  <label for="15min">до 15 минут</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="duration" id="30min" />
                  <label for="30min">до 30 минут</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="duration" id="60min" />
                  <label for="60min">до 60 минут</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="duration" id="120min" />
                  <label for="120min">до 120 минут</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="duration" id="2hour" />
                  <label for="2hour">от 2 часов</label>
                </div>
              </div>
               <!--Фильтрация по брендам-->
              <div class="filter-section filter-section_brand" id="brand">
                <div class="filter-section_title">Производитель</div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="hw" />
                  <label for="hw">Hobby World</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="magellan" />
                  <label for="magellan">Magellan</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="gaga" />
                  <label for="gaga">GaGa Games</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="mattel" />
                  <label for="mattel">Mattel</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="playlab" />
                  <label for="playlab">PlayLab</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="piatnik" />
                  <label for="piatnik">Piatnik</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="rightgames" />
                  <label for="rightgames">Правильные игры</label>
                </div>
                <div class="filter-option">
                  <input type="checkbox" name="brand" id="10kingdom" />
                  <label for="10kingdom">Десятое королевство</label>
                </div>
              </div>
              <!--Фильтрация по количеству игроков-->
              <div class="filter-section filter-section_amount" id="amount">
                <div class="filter-section_title">Количество игроков</div>
                <div class="filter-section_range">
                  <div class="range">
                    <div class="amount range_from">
                      <span class="line-prefix">От</span>
                      <input id="input-amount-from" type="number" value="0" min="0" max="99" step="10" />
                    </div>
                    <div class="amount range_to">
                      <span class="line-prefix">До</span>
                      <input id="input-amount-to" type="number" value="99" min="0" max="99" step="10" />
                    </div>
                  </div>
                  <div class="slider__wrap">
                    <div id="slider-amount"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main__content">
            <!--Блок товара, шаблон для скрипта-->
            <div class="products__container">
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById('searchBar')?.addEventListener('focus', (event) => { const target = event.target as HTMLSelectElement; target.value = ''; this.render() }); // для очистки инпута, когда нажимаем снова (чтобы не висело постоянно)
    this.mainContent = document.querySelector('.products__container') as HTMLElement;
    console.log(this.mainContent)
    this.mainContent.innerHTML = '';
    products.forEach((item, index) => {
      const element = document.createElement('a');
      element.id = `${++index}product`;
      element.className = 'product__item';
      element.href = `#${index}product`;
      // const element = this.createNewElement('a', 'product__item', `${++index}product`); // создание карточки товара, ее контейнер
      arrayId.push(`${index}product`);
      const elementContent = this.createNewElement('div', 'product__item_content'); // создание оболочки элементов контейнера карты
      const imgElementContent = this.createNewElement('div', 'product_image'); // создание оболочки для картинки
      const img = document.createElement('img'); // создание картинки
      img.className = `${index}product`; // класс для картинки
      img.src = `${item.thumbnail}`; // путь для картинки
      imgElementContent.append(img); // добавление картинки в контейнер картинки (враппер)
      elementContent.append(imgElementContent, this.createNewElement('div', 'product_title', '', `${item.title}`), this.createNewElement('div', 'product_price button', '', `${item.price} руб`)); // добавление картинки, названия карточки (игры)  и ценник
      const productParams = this.createNewElement('div', 'product_params'); // создание контейнера для добавления параметров
      // наполнение контейнера параметрами
      // рейтинг
      const raiting = this.createNewElement('div', 'params__item raiting');
      const raitingImg = document.createElement('img');
      raitingImg.src = './img/icon-star.png';
      raitingImg.width = 20;
      raitingImg.height = 20;
      raitingImg.alt = 'Raiting';
      raiting.append(raitingImg);
      raiting.append(this.createNewElement('span', '', '', `${item.rating}`));
      // время
      const duration = this.createNewElement('div', 'params__item duration');
      const durationImg = document.createElement('img');
      durationImg.src = './img/icon-hourglass.png';
      durationImg.width = 20;
      durationImg.height = 20;
      durationImg.alt = 'Duration';
      duration.append(durationImg);
      duration.append(this.createNewElement('span', '', '', `${item.duration}`));
      // количество игроков
      const players = this.createNewElement('div', 'params__item players');
      const playersImg = document.createElement('img');
      playersImg.src = './img/icon-hourglass.png';
      playersImg.width = 20;
      playersImg.height = 20;
      playersImg.alt = 'Duration';
      players.append(playersImg);
      players.append(this.createNewElement('span', '', '', `${item.amount}`));

      productParams.append(raiting, duration, players);
      elementContent.append(productParams); // добавление в карточку, контейнера с параметрами
      element.append(elementContent); // добавление оболочки всех элементов со всеми элементами в главный элемент
      this.mainContent.append(element); // добавление на страницу
    });
    return this.mainContainer;
  }
}

export default MainPage;