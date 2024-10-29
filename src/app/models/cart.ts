import { Product } from "./product"

export type ProductCart = {
  product: Product,
  amount: number
}

export type ConfirmInfo = {
  amount: number,
  name: string
}

export class CartForm {
  constructor(
    public name: string,
    public address: string,
    public credit: number
  ) {}
}
