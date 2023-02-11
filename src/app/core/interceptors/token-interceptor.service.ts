import { Token } from 'src/app/core/token/token';
import { IResponse } from './../../shared/interfaces/response.interface';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class TokenHttpInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        const token = Token._instance.token;

        if (token) {
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            })
        }

        return next.handle(req)
    }

}
