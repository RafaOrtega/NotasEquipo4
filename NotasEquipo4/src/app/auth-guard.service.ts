import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(router: ActivatedRouteSnapshot): boolean|UrlTree{
    
    if(this.userService.isLogin()===0){
      alert("No tienes acceso. Please Log In");
      this.router.navigate(["login"],{queryParams: {back_url: router.url}})
      return false;
    }else
    return true;
  }
}
