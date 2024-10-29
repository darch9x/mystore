import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() added = new EventEmitter();

  maxProdAmount: number = 10;
  selectedAmount: number = 1;

  router: Router = new Router;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    };
  }
  ngOnInit(): void {

  }

  onAdd(): void {
    const prod = {
      id: this.product.id,
      amount: Number(this.selectedAmount)
    }
    this.added.emit(prod);
  }

  onOpenDetail(): void {
    this.router.navigate([`/products/${this.product.id}`], {state: {product: this.product}});
  }
}
