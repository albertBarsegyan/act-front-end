import { mainApiInstance } from '@/config/main-api-instance';
import { requestTags } from '@/modules/store/constants/request-tags';
import { ProductType } from '@/modules/store/types';
import { OrderRequest } from '@/modules/store/types/order';
import { ProcessPaymentRequest } from '@/modules/store/types/payment';
import { getErrorMessage } from '@/utils/error';

type GetProductsResponse = {
  data: ProductType[] | null;
  error: string | null;
};

export const storeService = {
  orderProducts: async (data: OrderRequest) => {
    try {
      const response = await mainApiInstance.post('store/create-order/', { json: data });

      return { data: (await response.json()) as { payment_url: string }, error: null };
    } catch (error) {
      return { data: null, error: getErrorMessage(error) };
    }
  },
  processPayment: async (data: ProcessPaymentRequest) => {
    try {
      const response = await mainApiInstance.post('payments/process-payment/', { json: data });

      return { data: { response_code: await response.json() }, error: null };
    } catch (error) {
      return { data: null, error: getErrorMessage(error) };
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
