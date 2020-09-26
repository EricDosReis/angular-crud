import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Constants } from '../enums';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private matSnackBar: MatSnackBar
  ) {}

  baseUrl = `${Constants.API_BASE_URL}/products`;

  showMessage(message: string): void {
    this.matSnackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }
}
