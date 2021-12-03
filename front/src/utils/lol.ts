import { OrderEntry, Product, PRODUCTS } from './data';

enum StateName {
  WaitForScan,
  WaitQuantity,
  WaitForPCode,
  UpdateAmount,
  FindProduct,
  UnknownProduct,
  ReturnProduct,
  RemoveProductQuantity,
  Pay,
  PaymentMode,
  PayOK,
  PayError,
  EnterReturnQuantity,
}

class Data {
  private _currentProduct?: Product;
  private _price: number = 0;
  private _order: OrderEntry[] = [];
  private _paid: number = 0;
  private _quantity: number = 1;

  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  private _return: boolean = false;

  public get return(): boolean {
    return this._return;
  }
  public set return(value: boolean) {
    this._return = value;
  }
  public get currentProduct(): Product {
    return this._currentProduct;
  }
  public set currentProduct(value: Product) {
    this._currentProduct = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get order(): OrderEntry[] {
    return this._order;
  }
  public set order(value: OrderEntry[]) {
    this._order = value;
  }
  public get paid(): number {
    return this._paid;
  }
  public set paid(value: number) {
    this._paid = value;
  }
}

class FSM {
  currentState: StateName = StateName.WaitForScan;
  state: Data = new Data()

  constructor() {}

  enterCode(code: number) {
    const product = PRODUCTS.find(p => p.id === code)
    if(product) this.state.currentProduct = product
  }

  scanCode(code: number) {
    const product = PRODUCTS.find(p => p.id === code)
    if(product) this.state.currentProduct = product
  }

  pressReturn() {
    this.state.return = true
  }

  enterQuantity(qty: number) {
    this.state.quantity = qty
  }

  pay(){
    if(this.currentState == StateName.Pay) {
      
    }
  }

  checkState(from: StateName, to: StateName, condition: boolean) {
    if (from === this.currentState && condition) {
      this.currentState = to;
      return true;
    }
    return false;
  }
}
