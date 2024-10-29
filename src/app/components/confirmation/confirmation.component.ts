import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ConfirmInfo } from '../../models/cart';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})

export class ConfirmationComponent implements OnInit {

  confirmInfo: ConfirmInfo;

  constructor(
    private service: ProductService
  ) {
    this.confirmInfo = {
      name: '',
      amount: 0
    };
   }
  ngOnInit(): void {
    const result = this.service.getConfirmInfo();
    if (result) {
      this.confirmInfo = result;
    }
  }

}
