import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartService} from  "../cart/services/cart.service" ;

import { Route, RouterModule} from"@angular/router";
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//  import {SortPipe} from "../shared/pipes/sort.pipe" ;

const routes : Route[] =[
  {
    path :'cart' ,
    component : CartComponent
  },
  {
    path:"checkout",
    component :CheckoutComponent
  }
]

@NgModule({
  declarations: [
    CartComponent, 
    CartListComponent, 
    CartSummaryComponent, CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[
    CartComponent
  ],
  providers :[  //ng 2, 4 5 , for ng 6 not needed 
    CartService
  ]
})
export class CartModule { }
