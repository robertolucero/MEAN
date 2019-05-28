import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBearerToken(refreshToken: string): Observable<any> {
    return this.http
      .get<any>('https://localhost:4000/api/token')
      .pipe(
        catchError((error: Response) =>
          throwError(`Network error: ${error.statusText} (${error.status})`)
        )
      );
  }
}
