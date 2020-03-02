import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  amount: number;
  count: number;
  constructor(private cartService: CartService) {  //singleton instance of the service
    console.log('Cart Summary created');


     //Fixed with behavoural suject
    // this.amount = this.cartService.amount;
    // this.count = this.cartService.count;
  }

  ngOnInit() {
    //subscribe the changes
    this.cartService
      .amount$
      .subscribe((value: number) => {
        console.log("summary subscriber:" + value);
        this.amount = value;
    });

    this.cartService
    .count$
    .subscribe((value :number)=>{
      console.log("summary subscriber:" + value);
      this.amount = value;
    })
  }

}
