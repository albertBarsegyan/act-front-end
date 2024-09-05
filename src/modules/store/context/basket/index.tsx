'use client';
import React, { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';

import { ProductType } from '@/modules/store/types';

interface StoreState {
  basket: ProductType[];
}

interface StoreAction {
  type: 'ADD_TO_BASKET' | 'REMOVE_FROM_BASKET';
  payload: ProductType;
}

const initialState: StoreState = {
  basket: [],
};

const StoreContext = createContext<{
  basket: ProductType[];
  addToBasket: (product: ProductType) => void;
  removeFromBasket: (product: ProductType) => void;
}>({
  basket: [],
  addToBasket: () => null,
  removeFromBasket: () => null,
});

const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.payload] };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [{ basket }, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product: ProductType) => dispatch({ type: 'ADD_TO_BASKET', payload: product });

  const removeFromBasket = (product: ProductType) => dispatch({ type: 'REMOVE_FROM_BASKET', payload: product });

  const contextDataMemo = useMemo(
    () => ({
      basket,
      addToBasket,
      removeFromBasket,
    }),
    [basket, addToBasket, removeFromBasket]
  );

  return <StoreContext.Provider value={contextDataMemo}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
