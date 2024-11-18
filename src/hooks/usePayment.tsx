import React, { useEffect } from 'react';

import { FormResponseContent } from '@/components/common/form-response-content';
import { useModal } from '@/context/modal/Modal.context';
import { localStorageConstants } from '@/modules/store/constants/local-storage';
import { storeService } from '@/modules/store/services';
import { localStorageUtils } from '@/utils/local-storage';
import { queryParamsToObject } from '@/utils/query-params';
import { routePath } from '@/utils/route';

export function usePayment() {
  const { provideModalSettings } = useModal();

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
          const isSuccessful = response?.data?.response_code === 'OK';

          if (isSuccessful) localStorageUtils.removeItem(localStorageConstants.BASKET);

          const description = isSuccessful ? 'Your payment was successful!' : 'Your payment was unsuccessful!';

          provideModalSettings({
            content: (
              <FormResponseContent
                onTryAgain={() => (window.location.href = routePath.getCheckout())}
                isSuccess={isSuccessful}
                description={description}
              />
            ),
            isShowing: true,
            delay: 0,
          });
        });
    }
  }, []);
}
