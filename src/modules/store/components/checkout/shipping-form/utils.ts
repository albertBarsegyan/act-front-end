import { ShippingFormData } from '@/modules/store/components/checkout/shipping-form/schema';
import { paymentMethodVariants } from '@/modules/store/constants/payment';
import { BasketItem } from '@/modules/store/context/basket/type';
import { OrderRequest, OrderType } from '@/modules/store/types/order';

export const normaliseOrderData = (orderData: ShippingFormData, products: BasketItem[]): OrderRequest => {
  const productsNormalised = products.map(({ product, count }) => ({
    product_id: product.id,
    quantity: count,
  }));

  return {
    order_type: paymentMethodVariants.SHIPPING as OrderType,
    return_url: window.location.href,
    city: orderData.city,
    address: orderData.address,
    order_notes: orderData.notes,
    order_items: productsNormalised,
    phone_number: orderData.phone,
  };
};
