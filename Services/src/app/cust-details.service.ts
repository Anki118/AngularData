import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICusts } from './Cust';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustDetailsService {

  constructor(private http:HttpClient) { 

  }
  private _url:string="http://192.168.1.208:9090/spring-restful-service/custs";

  getDetails():Observable<ICusts[]>
  {
    return this.http.get<ICusts[]>(this._url);
  }
}