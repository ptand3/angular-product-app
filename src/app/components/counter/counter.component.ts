import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(e: Event){
    console.log(e);
    this.counter ++;

  }
  decrement(){
    this.counter --;
  }

}
