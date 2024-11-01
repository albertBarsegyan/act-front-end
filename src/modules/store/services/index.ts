import { mainApiInstance } from '@/config/main-api-instance';
import { requestTags } from '@/modules/store/constants/request-tags';
import { Order, ProductType } from '@/modules/store/types';
import { getErrorMessage } from '@/utils/error';

type GetProductsResponse = {
  data: ProductType[] | null;
  error: string | null;
};

export const storeService = {
  orderProducts: async (data: Order) => {
    try {
      const response = await mainApiInstance.post('store/create-order/', { json: data });
      return response.json();
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  },

  getProducts: async (): Promise<GetProductsResponse> => {
    try {
      const response = await mainApiInstance.get('store/products/', {
        next: { tags: [requestTags.PRODUCTS] },
      });

      return { data: await response.json(), error: null };
    } catch (error) {
      console.log('error', error);
      return { data: null, error: getErrorMessage(error) };
    }
  },
};
