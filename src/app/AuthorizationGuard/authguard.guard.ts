import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../Services/authguard/authguard-service.service';

@Injectable({
  providedIn: 'root'
})

// export authguardGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export class AuthGuardGuard implements CanActivate {
  constructor(private authguardService: AuthguardServiceService, private router:Router){}
  canActivate():boolean{
    if(!this.authguardService.gettoken())
    {
      this.router.navigateByUrl("/");
      alert("Please login");
    }
    return this.authguardService.gettoken();
  }
  
}