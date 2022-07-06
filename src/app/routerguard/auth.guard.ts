import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  canLoad(route: Route, segments: UrlSegment[]): boolean  {
    debugger
    let isValidUser: string| null = localStorage.getItem('isUserLoggedIn');
    let isAdminUser : any = localStorage.getItem("isAdmin");
    
    if(isValidUser == "true"){

    if(route.path == "admin"){
       return (isAdminUser == "true")
    }
    else{
      return true;
    }
  }
  return false;
  }
  
}
