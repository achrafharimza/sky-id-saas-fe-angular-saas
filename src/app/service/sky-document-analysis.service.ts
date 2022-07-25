import { ApiUrl } from 'src/assets/Apiurl';
import { Observable } from 'rxjs';
import { APIhistory } from './../model/apihistory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkyDocumentAnalysisService {

  apiURL = new ApiUrl;


  constructor(private http: HttpClient) { }

  addDocument(document: any){
    return this.http.post(`${this.apiURL.getUrl()}apiocr/read`, document)
  }

  getDocument(page:number, limit:number)  {
    return this.http.get<any>(`${this.apiURL.getUrl()}apiocr/all?page=${page-1}&limit=${limit}`)
  }

  getImage(image: string) : Observable<any> {
    return this.http.get(`${this.apiURL.getUrl()}apiocr/file/${image}` , {responseType: 'mimetype' as 'arraybuffer'})
  }
}
