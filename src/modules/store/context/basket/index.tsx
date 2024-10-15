'use client';
import React, { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';

import { BasketItem, StoreAction, StoreState } from '@/modules/store/context/basket/type';
import { addProductToBasketUtil, removeProductFromBasketUtil } from '@/modules/store/context/basket/util';
import { ProductType } from '@/modules/store/types';

const initialState: StoreState = {
  basket: [],
};

const StoreContext = createContext<{
  basket: BasketItem[];
  addToBasket: (product: ProductType) => void;
  removeFromBasket: (product: ProductType) => void;
  basketItemsCount: number;
}>({
  basket: [],
  addToBasket: () => null,
  removeFromBasket: () => null,
  basketItemsCount: 0,
});

const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      const updatedBasket = addProductToBasketUtil(state.basket, action.payload);

      return { ...state, basket: updatedBasket };
    }
    case 'REMOVE_FROM_BASKET': {
      const updatedBasket = removeProductFromBasketUtil(state.basket, action.payload);

      return { ...state, basket: updatedBasket };
    }
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [{ basket }, dispatch] = useReducer(storeReducer, initialState);

  const basketItemsCount = useMemo(() => basket.reduce((acc, item) => acc + item.count, 0), [basket]);

  const addToBasket = (product: ProductType) => dispatch({ type: 'ADD_TO_BASKET', payload: product });

  const removeFromBasket = (product: ProductType) => dispatch({ type: 'REMOVE_FROM_BASKET', payload: product });

  const contextDataMemo = useMemo(
    () => ({
      basket,
      addToBasket,
      removeFromBasket,
      basketItemsCount,
    }),
    [basket, addToBasket, removeFromBasket]
  );

  return <StoreContext.Provider value={contextDataMemo}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
