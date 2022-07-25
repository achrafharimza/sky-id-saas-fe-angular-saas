import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/assets/Apiurl';

@Injectable({
  providedIn: 'root'
})
export class SkyFaceService {

  apiURL = new ApiUrl;

  constructor(private http: HttpClient) { }


  getHistory(page:number, limit:number)  {
    return this.http.get<any>(`${this.apiURL.getUrl()}skyface/all?page=${page-1}&limit=${limit}`);
  }

  addFace(face: any){
    return this.http.post(`${this.apiURL.getUrl()}skyface/add`, face)
  }

  
}
