import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/assets/Apiurl';

import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 constructor(private http: HttpClient) {}
  apiUrl = new ApiUrl;


  add(newuser: Client) {
    return this.http.post<Client>(`${this.apiUrl.getUrl()}client/add`, newuser);
  }

  findall() {
    return this.http.get<Client[]>(`${this.apiUrl.getUrl()}client/all`);
  }

}
