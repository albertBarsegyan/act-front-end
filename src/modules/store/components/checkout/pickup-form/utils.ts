import { CheckoutPickupFormData } from '@/modules/store/components/checkout/pickup-form/type';
import { paymentMethodVariants } from '@/modules/store/constants/payment';
import { BasketItem } from '@/modules/store/context/basket/type';
import { OrderRequest, OrderType } from '@/modules/store/types/order';

export const normalisePickupFormData = (orderData: CheckoutPickupFormData, products: BasketItem[]): OrderRequest => {
  const productsNormalised = products.map(({ product, count }) => ({
    product_id: product.id,
    quantity: count,
  }));

  const phoneData = orderData.phone ? { phone_number: orderData.phone } : {};

  return {
    order_type: paymentMethodVariants.PICKUP as OrderType,
    return_url: window.location.href,
    order_items: productsNormalised,
    ...phoneData,
  };
};
