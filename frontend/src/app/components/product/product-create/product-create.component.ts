import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'crud-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}

  product: Product = {
    name: '',
    price: null,
    year: '',
  };

  ngOnInit(): void {}

  create(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created with success');

      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
