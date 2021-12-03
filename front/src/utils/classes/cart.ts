import { ProductCart } from "./productCart"
import { Product } from "./product"

export class Cart {
    private _products: ProductCart[]
    
    constructor() {}
    
    public get products(): ProductCart[] {
        return this._products
    }
    public set products(value: ProductCart[]) {
        this._products = value
    }

    public getPrice() {
        return this._products.reduce((acc: number, productCart: ProductCart) => {
            acc += productCart.product.price;
            return acc
        }, 0)
    }

    public clear() {
        this._products = [];
    }

    public addProduct(product: Product) {
        this._products.push(new ProductCart(product, 1))
    }
}

