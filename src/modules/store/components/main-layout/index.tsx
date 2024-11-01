import { WentWrongContent } from '@/components/went-wrong-content';
import { StoreHeader } from '@/modules/store/components/header';
import { StoreContent } from '@/modules/store/components/store-content';
import { StoreProvider } from '@/modules/store/context/basket';
import { storeService } from '@/modules/store/services';

export async function MainLayout() {
  const { data = [], error } = await storeService.getProducts();

  if (error) {
    return <WentWrongContent />;
  }

  return (
    <StoreProvider>
      <StoreHeader />
      <StoreContent products={data} />
    </StoreProvider>
  );
}
