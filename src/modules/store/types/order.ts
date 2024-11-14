export type OrderType = 'in_store' | 'delivery';

interface OrderItem {
  product_id: number;
  quantity: number;
}

export interface OrderRequest {
  phone_number: string;
  order_type: OrderType;
  order_items: OrderItem[];
  return_url: string;
  city?: string | null;
  address?: string | null;
  order_notes?: string | null;
}
