import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'crud-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  displayedColumns = ['id', 'name', 'price', 'year', 'actions'];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  delete(id: string): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Product deleted with success');

      this.read();
    });
  }
}
