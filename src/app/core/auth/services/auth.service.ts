import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: {email: string, password: string}): Observable<any> {
    const formData = new FormData();
    formData.set('email', credentials.email);
    formData.set('password', credentials.password);

    return this.http.post(`${environment.api}/login.php`, formData)
  }

}
