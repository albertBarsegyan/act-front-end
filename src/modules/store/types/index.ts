export interface ProductType {
  readonly id: number;
  name: string;
  readonly image?: string;
  price: string;
  quantity: number;
}

export interface Order {
  email: string;
  phone_number: string;
  order_type: string;
  order_items: OrderItem[];
}

export interface OrderItem {
  product_id: number;
  quantity: number;
}
