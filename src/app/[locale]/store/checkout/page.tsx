import { CheckoutContainer } from '@/modules/store/components/checkout/container';
import { StoreHeader } from '@/modules/store/components/header';
import { StoreProvider } from '@/modules/store/context/basket';

export default function CheckoutPage() {
  return (
    <StoreProvider>
      <StoreHeader />
      <CheckoutContainer />
    </StoreProvider>
  );
}
