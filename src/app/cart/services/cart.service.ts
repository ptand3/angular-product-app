import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import { Subject , BehaviorSubject } from "rxjs" ;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Behaviour subject takes the default value s
  private _cartItems: CartItem[] = [];// can't be accesses outside
  private _amount = 0; //total amount
  private _count = 0;  //total items in count

  amount$ : BehaviorSubject<number> =  new BehaviorSubject(this._amount);
  count$ :BehaviorSubject<number> = new BehaviorSubject(this._count);
  

  //Session storage per tab , remain until tab is opened
  //local Storage for the specific browser , always persistent 
  //until the browser clean, remove item , clean apis called

  // storage :Storage= window.sessionStorage, //ts interface
  
  storage :Storage= window.localStorage

  get cartItems() {
    return this._cartItems;
  }

  set cartItems(items: CartItem[]) {
    this._cartItems = items;
  }

  get count() {
    return this._count;

  }
  set count(value: number) {
    this._count = value;
    console.log(" count is" + value);
     //publishing the values to subscriber
    this.count$.next(this._count);
  }

  get amount() {
    return this._amount;
  }
  set amount(value: number) {
    this._amount = value;
    console.log(" amount is" + value);
    //publishing the values to subscriber
    this.amount$.next(this._amount) ;
  }

  constructor() {
    console.log("cart service created");

    //loading the data in the session 
    const strData = this.storage.getItem("cartItems");
    if(strData){
      this._cartItems= JSON.parse(strData);
    }
    window.onstorage = () =>{
      //when local storage changes , dump the list to the console
      console.log("storage has changed");
      const strData = this.storage.getItem("cartItems");
      if(strData){
        this._cartItems= JSON.parse(strData);
      };
  
  }

   
  }

  calculate() :void{
     let amount = 0;
     let count = 0 ;//local variables

     for(let cartItem of this._cartItems){
       amount +=cartItem.price * cartItem .qty;
       count +=cartItem.qty;
     }

     //setter and set values
     this.amount = amount;
     this.count = count;
  }

  addItem(cartItem : CartItem){
    this._cartItems.push(cartItem);
    this.calculate();
    this.storage.setItem ("cartItems", JSON.stringify(this._cartItems));
  }

  

  removeItem(id:number){
    const index = this._cartItems.findIndex(item =>item.id=== id);
    this._cartItems.splice(index, 1);
    this.calculate();
    this.storage.setItem ("cartItems", JSON.stringify(this._cartItems));
  }
  empty(){
    this._cartItems.splice(0, this._cartItems.length);
    this.calculate();
    this.storage.removeItem ("cartItems");
  }
}
