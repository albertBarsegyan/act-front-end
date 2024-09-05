import { StoreHeader } from '@/modules/store/components/header';
import { StoreContent } from '@/modules/store/components/store-content';
import { StoreProvider } from '@/modules/store/context/basket';

export function MainLayout() {
  return (
    <StoreProvider>
      <StoreHeader />
      <StoreContent />
    </StoreProvider>
  );
}
