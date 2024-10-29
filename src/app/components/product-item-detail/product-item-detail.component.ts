import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCart } from '../../models/cart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  maxProdAmount: number = 10;
  selectedAmount: number = 1;

  constructor(
    private service: ProductService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    };
  }
  ngOnInit(): void {
    if (window.history.state?.product) {
      this.product = window.history.state?.product;
    }
  }

  onAdd(): void {
    const body: ProductCart = {
      product: this.product,
      amount: this.selectedAmount
    }
    this.service.addProductToCart(body);
    alert('Added to cart!');
  }
}
