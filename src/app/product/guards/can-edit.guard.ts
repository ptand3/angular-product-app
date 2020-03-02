import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate  {
  canActivate(
    next : ActivatedRouteSnapshot,
    state :RouterStateSnapshot) :any{ //rreturn boolean of any type
      console.log("Can Edit Guard" , state.url);

      console.log("P ID" , next.params["id"]);
     return window.confirm("Do you want to edit");}

  
}
