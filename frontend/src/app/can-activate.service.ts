import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    Route,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem("username")) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}