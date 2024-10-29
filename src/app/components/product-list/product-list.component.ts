import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductCart } from '../../models/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onAddToCart(event: any) {
    const body: ProductCart = {
      product: this.products.filter(item => item.id === event.id)[0],
      amount: event.amount
    }
    console.log('receie: ', body);
    this.service.addProductToCart(body);
    alert('Added to cart!');
  }
}
