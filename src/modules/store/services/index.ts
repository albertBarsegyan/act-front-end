import { axiosInstance } from '@/config/axios';
import { Order } from '@/modules/store/types';
import { getErrorMessage } from '@/utils/error';

export const storeService = {
  orderProducts: async (data: Order) => {
    try {
      const response = await axiosInstance.post('/store/create-order/', data);
      return response.data;
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  },
  getProducts: async () => {
    try {
      const response = await axiosInstance.get('/store/products/');
      return response.data;
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  },
};
