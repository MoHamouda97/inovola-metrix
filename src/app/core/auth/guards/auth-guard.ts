import { Token } from 'src/app/core/token/token';
import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private router: Router, private toastr: ToastrService) {}

    async canActivate(router: any, state: RouterStateSnapshot) {
        const accessAs = localStorage.getItem('accessAs');

        if (Token._instance.token) return true;

        this.router.navigate(['/sign-in']);

        this.toastr.warning('Please login first')

        return false;
    }

}