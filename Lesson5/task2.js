//  Функция для вычисления стоимости набора

function calculateTotalCost(costBasket, quantityItem, promoCode = null) 
{
  const costPromoDarim = 300;
  const minQuantityItemDiscount = 10;
  const quantityDiscountPercent = 5;
  const totalCostMaxLimit = 50000;
  const discountPercentOverMaxLimit = 20;
  const totalCostMinLimit = 20000;
  const discountPercentOverMinLimit = 15;

  if (promoCode === 'ДАРИМ300') {
    costBasket = (costBasket > costPromoDarim) ? costBasket - costPromoDarim : 0;
  }

  costBasket = (quantityItem >= minQuantityItemDiscount) ? costBasket * ((100 - quantityDiscountPercent) / 100) : costBasket;
  costBasket = costBasket > totalCostMaxLimit ? costBasket - (costBasket - totalCostMaxLimit) * discountPercentOverMaxLimit / 100 : costBasket;

  if (promoCode === 'СКИДКА15' && costBasket >= totalCostMinLimit) {
    costBasket -= costBasket * discountPercentOverMinLimit / 100;
  }

  return costBasket;
}

let costBasket = 60000;
let quantityItem = 5;
let promoCode = null;
// let promoCode = 'ДАРИМ300';
// let promoCode = 'СКИДКА15';

let calculatedCost = calculateTotalCost(costBasket, quantityItem, promoCode);
console.log('Рассчитаная стоимость корзины с учетом всех правил составляет: ' + calculatedCost + ' рублей.');