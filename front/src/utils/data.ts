export interface Product {
  id: number;
  price: number;
  name: string;
}

export interface OrderEntry {
    product: Product;
    quantity: number;
}

export const PRODUCTS: Product[] = [
    {id: 1, price: 29.99, name:"pomme" },
    {id: 2, price: 59.99, name:"poire" },
    {id: 3, price: 49.99, name:"pêche" },
    {id: 4, price: 19.99, name:"prune" },
]

