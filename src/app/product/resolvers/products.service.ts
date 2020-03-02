// resolver
import { ProductService } from './../services/product.service';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolveService implements Resolve<Product[]> {

  constructor(private productService: ProductService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
      return this.productService.getProducts();
  }
}
 