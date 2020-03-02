import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { Address } from '../../models/address';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})


export class AddressComponent implements OnInit {
  //input decorator for property binding from parent to child ; [address] :"headOffice" 
  @Input()
  address : Address;

  //Output and event emmitter  from child to parent 
  //Child publish the event with value and parent subscribe the event
    @Output()
    contactEvent :EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
   
  contact(){
    //trigger an event subscribed by parent comp ; (contactEvent) ="expr"
    //the value recieved in event is recived as $event in the parent 
    this.contactEvent.emit(this.address)
  }
}
