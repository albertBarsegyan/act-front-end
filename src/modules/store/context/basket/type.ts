import { ProductType } from '@/modules/store/types';

export interface BasketItem {
  count: number;
  product: ProductType;
}

export interface StoreState {
  basket: BasketItem[];
}

export interface StoreAction {
  type: 'ADD_TO_BASKET' | 'REMOVE_FROM_BASKET';
  payload: ProductType;
}
