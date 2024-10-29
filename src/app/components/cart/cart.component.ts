import { Component, OnInit } from '@angular/core';
import { CartForm, ConfirmInfo, ProductCart } from '../../models/cart';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: ProductCart[] = [];

  model: CartForm;
  totalAmount: number = 0;

  constructor(
    private router: Router,
    private service: ProductService
  ) {
    this.model = new CartForm('', '', 0);
  }
  ngOnInit(): void {
    this.cart = this.service.getCurrentCart();

    this.calTotalAmount(this.cart);
  }

  onSubmit(): void {
    const confirmInfo: ConfirmInfo = {
      amount: this.totalAmount,
      name: this.model.name
    }
    this.service.submitCart(confirmInfo);
    this.router.navigateByUrl('/confirmation');
  }

  onAmountChange(item: ProductCart): void {
    this.calTotalAmount(this.cart);
    if (item.amount === 0) {
      alert(`Removed ${item.product.name} from cart`);
      this.cart = this.cart.filter((product: ProductCart) => product.product.id !== item.product.id);
      this.service.removeFromCart(item);
    }
  }

  calTotalAmount(cart: ProductCart[]): void {
    let result = 0;
    cart.forEach((product: ProductCart) => {
      result += product.amount * product.product.price;
    });

    this.totalAmount = Number(result.toFixed(2));
  }

}
