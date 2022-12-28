import * as noUiSlider from '../../node_modules/nouislider';

/* noUiSlider на цену */
function noSlider (): void {
  const sliderPrice = document.getElementById('slider-price') as HTMLDivElement;

  const sliderPr = noUiSlider.create(sliderPrice, {
    start: [0, 263],
    connect: true,
    range: {
      min: 0,
      max: 263
    },
    tooltips: false,
    format: {
      from: function (value) {
        return parseInt(value);
      },
      to: function (value) {
        return Math.floor(value);
      }
    }
  });

  const rangePriceFrom = document.getElementById('input-price-from') as HTMLInputElement;
  const rangePriceTo = document.getElementById('input-price-to') as HTMLInputElement;

  if (sliderPrice instanceof HTMLDivElement) {
    sliderPr.on('update', (values, handler) => {
      const allValues: number[] | string[] = [];
      console.log(values[handler].toString());
      allValues[handler] = values[handler].toString();
      rangePriceFrom.value = values[0].toString()
      rangePriceTo.value = values[1].toString()
    })
  }

  /* noUiSlider на количесвто товара */

  const sliderAmount = document.getElementById('slider-amount') as HTMLDivElement;

  const sliderAm = noUiSlider.create(sliderAmount, {
    start: [0, 99],
    connect: true,
    range: {
      min: 0,
      max: 99
    },
    tooltips: false,
    format: {
      from: function (value) {
        return parseInt(value);
      },
      to: function (value) {
        return Math.floor(value);
      }
    }
  });
  const rangeAmountFrom = document.getElementById('input-amount-from') as HTMLInputElement;
  const rangeAmountTo = document.getElementById('input-amount-to') as HTMLInputElement;

  if (sliderAmount instanceof HTMLDivElement) {
    sliderAm.on('update', (values, handler) => {
      const allValues: number[] | string[] = [];
      console.log(values[handler].toString());
      allValues[handler] = values[handler].toString();
      rangeAmountFrom.value = values[0].toString()
      rangeAmountTo.value = values[1].toString()
    })
  }
}

export default noSlider;