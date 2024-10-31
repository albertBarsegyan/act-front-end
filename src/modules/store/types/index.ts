export interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
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
