import { Checkout } from '@/modules/store/components/checkout';
import { StoreProvider } from '@/modules/store/context/basket';

export default function CheckoutPage() {
  return (
    <StoreProvider>
      <Checkout />
    </StoreProvider>
  );
}
