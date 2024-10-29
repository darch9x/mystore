import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmInfo, ProductCart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = document.location.origin;

  currentCart: ProductCart[] = [];
  currentSubmitInfo: ConfirmInfo | null = null;

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('../../assets/data.json');
  }

  addProductToCart(body: ProductCart): void {
    if (this.currentCart.length < 1) {
      this.currentCart.push(body);
      return;
    }

    let isAdded = false;
    this.currentCart.forEach(item => {
      if (item.product.id === body.product.id) {
        isAdded = true;
        item.amount += body.amount;
      }
    });

    if (!isAdded) this.currentCart.push(body);
  }

  getCurrentCart() {
    return this.currentCart;
  }

  submitCart(confirmInfo: ConfirmInfo) {
    this.currentCart = [];
    this.currentSubmitInfo = confirmInfo;
  }

  getConfirmInfo(): ConfirmInfo | null {
    const result = this.currentSubmitInfo;
    this.currentSubmitInfo = null;
    return result;
  }

  removeFromCart(item: ProductCart) {
    this.currentCart = this.currentCart.filter((product: ProductCart) => product.product.id !== item.product.id);
  }
}
