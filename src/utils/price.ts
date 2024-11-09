import { BasketItem } from '@/modules/store/context/basket/type';

export const calculateBasketTotalPrice = (basket: BasketItem[]) => {
  return basket.reduce((acc, item) => {
    return acc + Number(item.product.price ?? 0) * Number(item.count ?? 0);
  }, 0);
};

export const calculateTotalItemPrice = ({ product, count }: BasketItem) => {
  return Number(product.price ?? 0) * count;
};
