import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubordinatesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.post(`${environment.api}/subordinates.php`, null).pipe(
      map((res: any) => res.data)
    )
  }

}
