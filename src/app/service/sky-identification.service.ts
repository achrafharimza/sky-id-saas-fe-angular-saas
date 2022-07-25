import { SkyIdHistory } from './../model/sky-id-history';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/assets/Apiurl';

@Injectable({
  providedIn: 'root'
})
export class SkyIdentificationService {
  apiURL = new ApiUrl;

  constructor(private http: HttpClient) { }
  compare(document: any){
    return this.http.post(`${this.apiURL.getUrl()}skyid/read`, document)
  }

  getHistory(page:number, limit:number)  {
    return this.http.get<any>(`${this.apiURL.getUrl()}skyid/all?page=${page-1}&limit=${limit}`);
  }

  search(key: any){
    return this.http.get(`${this.apiURL.getUrl()}skyid/search${key}`)
  }
}



//:9091/skyid/read
