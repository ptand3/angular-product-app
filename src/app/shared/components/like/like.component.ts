import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  isMouseOver = false;
   // [(likes)]//home page and product page likes


  //two way binding
  @Input()
  likes: number;

  //event name should be inputName + change;

  @Output ()

  likesChange : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  up(){
    this.likesChange.emit(this.likes +1 );
  }
  down(){
    this.likesChange.emit(this.likes - 1 );
  }

}
