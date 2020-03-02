import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartItem } from '../../../cart/models/cart-item';
import { ActivatedRoute } from '@angular/router';
import {of} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  fieldName:string;
  operator:string;
  expectedValue:number;
  
  products$ :Observable<Product[]>;

  constructor(private productService:ProductService,
              private cartService:CartService,
              private activatedRoute :ActivatedRoute,) { 
                console.log(this.activatedRoute.snapshot.data);
                // let products : Product[]= this.activatedRoute.snapshot;
                // this.products$ = of(products); //
              }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product:Product) {
      const cartItem = new CartItem();
      cartItem.id=product.id;
      cartItem.name=product.name;
      cartItem.price= Math.ceil(Math.random()*1000);
      cartItem.qty=1;
  
      this.cartService.addItem(cartItem)
  }

  deleteProduct(id:number) {
    this.productService
      .deleteProduct(id)
      .subscribe(obj=> {
        console.log("deleted successfully");
        //get new list
        this.products$ = this.productService.getProducts();
      })
  }

}
