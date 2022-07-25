import { ApiUrl } from '../../../assets/Apiurl';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = new ApiUrl;
  constructor(private http: HttpClient, private cook: CookieService,private tokenService:TokenService) { }

  Authentication(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL.getUrl()}login`, {email, password}).pipe(
      map(response => {
        // // sessionStorage.setItem('token', `Bearer ${response.token}`);
        // this.cook.set('email', response.email);
        // // sessionStorage.setItem('token', `Bearer ${response.token}`);
        // this.cook.set('token', `Bearer ${response.token}`);
        // console.log(response);
        this.tokenService.handle(response);
        this.tokenService.changeStatus(true);

        // return response
      })
    );
  }
  getAuthentication() {
    return this.cook.get('email');
    // return sessionStorage.getItem('token');
  }

  getToken() {
    if (this.getAuthentication()) {
      return this.cook.get('token');
      // return sessionStorage.getItem('token');
    }
    return null;
  }

}
