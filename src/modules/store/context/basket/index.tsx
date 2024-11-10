'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';

import { localStorageConstants } from '@/modules/store/constants/local-storage';
import { BasketItem, StoreAction, StoreState } from '@/modules/store/context/basket/type';
import { addProductToBasketUtil, removeProductToBasketUtil } from '@/modules/store/context/basket/util';
import { ProductType } from '@/modules/store/types';
import { localStorageUtils } from '@/utils/local-storage';

const initialState: BasketItem[] = [];

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
    case 'REPLACE_BASKET': {
      return { basket: action.data };
    }

    case 'ADD_TO_BASKET': {
      const updatedBasket = addProductToBasketUtil(state.basket, action.payload);

      const updatedBasketData = { basket: updatedBasket };

      localStorageUtils.setItem(localStorageConstants.BASKET, updatedBasket);

      return updatedBasketData;
    }
    case 'REMOVE_FROM_BASKET': {
      const updatedBasket = removeProductToBasketUtil(state.basket, action.payload);

      const updatedBasketData = { basket: updatedBasket };

      localStorageUtils.setItem(localStorageConstants.BASKET, updatedBasket);

      return updatedBasketData;
    }
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const localStorageBasket = localStorageUtils.getItem<BasketItem[]>(localStorageConstants.BASKET) ?? initialState;
  const [{ basket }, dispatch] = useReducer(storeReducer, { basket: localStorageBasket });

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
    [basket, addToBasket, removeFromBasket, router, basketItemsCount]
  );

  return <StoreContext.Provider value={contextDataMemo}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
