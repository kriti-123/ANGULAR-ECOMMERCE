export interface signUp {
  name: string;
  email: string;
  password: string;
}
export interface login {
  email: String;
  password: String;
}

export interface product {
  name: string;
  price: number;
  category: string;
  productUrl: string;
  description: string;
  seller: string;
  color: string;
  id: number;
  quantity: undefined | number;
  // productId:undefined|number
}
export interface cart {
  name: string;
  price: number;
  category: string;
  productUrl: string;
  description: string;
  seller: string;
  color: string;
  id: number;
  quantity: undefined | number;
  userId: number;
  productId: number;
}

export interface priceSummary {
  price: number;
  discount: number;
  tax: number;
  delivery: number;
  total: number;
}

export interface order {
  email: string;
  address: string;
  contact: string;
  totalPrice: number;
  userId: string;
  id: number | undefined;
}
