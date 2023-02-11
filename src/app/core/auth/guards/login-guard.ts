import { Token } from 'src/app/core/token/token';
import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})

export class LoginGuard implements CanActivate {

    constructor(private router: Router, private toastr: ToastrService) {}

    async canActivate(router: any, state: RouterStateSnapshot) {
        if (!Token._instance.token) return true;

        this.router.navigate([`/app/form-builder`]);

        this.toastr.warning('You are already logged in!!')

        return false;
    }

}