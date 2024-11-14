import { useEffect } from 'react';

import { storeService } from '@/modules/store/services';
import { queryParamsToObject } from '@/utils/query-params';

export function usePayment() {
  useEffect(() => {
    const queryData = queryParamsToObject(window.location.search);

    if (queryData?.orderID) {
      storeService
        .processPayment({
          order_id: queryData.orderID,
          payment_id: queryData.paymentID,
          response_code: queryData.resposneCode,
        })
        .then((response) => {
          console.log('response', response);
        });
    }
  }, []);
}
