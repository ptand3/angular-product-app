import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems : CartItem[]; //We dont use services directlt so create a local variable

  constructor(private cartService : CartService) {  //service injected into the component
    console.log("Cartlist component created");
    this.cartItems = this.cartService.cartItems ;
  }

  ngOnInit() {
  }

  remove(id :number){
    this.cartService.removeItem(id);
  }

}
