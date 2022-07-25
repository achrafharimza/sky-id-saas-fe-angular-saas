import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/assets/Apiurl';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  apiUrl = new ApiUrl;


  adduser(newuser: User) {
    return this.http.post<User>(`${this.apiUrl.getUrl()}user/add`, newuser);
  }

  getall(page:number, limit:number){
    return this.http.get<any>(`${this.apiUrl.getUrl()}user/all?page=${page-1}&limit=${limit}`);

  }
  delete(id: any) {
    return this.http.delete(`${this.apiUrl.getUrl()}user/delete/${id}`);
  }

}
