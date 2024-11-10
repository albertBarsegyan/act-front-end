import { WentWrongContent } from '@/components/went-wrong-content';
import { StoreHeader } from '@/modules/store/components/header';
import { StoreContent } from '@/modules/store/components/store-content';
import { storeService } from '@/modules/store/services';

export async function MainLayout() {
  const { data = [], error } = await storeService.getProducts();

  if (error) {
    return <WentWrongContent />;
  }

  return (
    <>
      <StoreHeader />
      <StoreContent products={data} />
    </>
  );
}
