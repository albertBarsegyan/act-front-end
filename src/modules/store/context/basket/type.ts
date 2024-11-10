import { ProductType } from '@/modules/store/types';

export interface BasketItem {
  count: number;
  product: ProductType;
}

export interface StoreState {
  basket: BasketItem[];
}

export type StoreAction =
  | { type: 'ADD_TO_BASKET' | 'REMOVE_FROM_BASKET'; payload: ProductType; data?: never }
  | { type: 'REPLACE_BASKET'; data: BasketItem[]; payload?: never };
