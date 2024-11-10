import { BasketItem } from '@/modules/store/context/basket/type';
import { ProductType } from '@/modules/store/types';

export const addProductToBasketUtil = (basket: BasketItem[], product: ProductType) => {
  let productFound = false;

  const updatedBasket = basket.map((basketItem) => {
    if (basketItem.product.id === product.id) {
      productFound = true;
      return {
        ...basketItem,
        count: basketItem.count + 1,
      };
    }
    return basketItem;
  });

  if (!productFound) {
    updatedBasket.push({
      product,
      count: 1,
    });
  }

  return updatedBasket;
};

export const removeProductToBasketUtil = (basket: BasketItem[], product: ProductType) => {
  let productFound = false;

  const updatedBasket = basket.map((basketItem) => {
    if (basketItem.product.id === product.id) {
      productFound = true;
      return {
        ...basketItem,
        count: basketItem.count - 1,
      };
    }
    return basketItem;
  });

  if (!productFound) {
    updatedBasket.push({
      product,
      count: 1,
    });
  }

  return updatedBasket;
};
