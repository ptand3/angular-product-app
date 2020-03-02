import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    count$ : Observable<number>;
    amount$ : Observable<number>;
    
    authenticated$ : Observable<boolean>;

    constructor(private cartService : CartService, private authService:AuthService) { 
     this.amount$ = this.cartService.amount$ ;
     this.count$ = this.cartService.count$;
     this.authenticated$ = this.authService.authenticated$;
  }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }

}
