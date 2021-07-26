import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from './main.class';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseurl:string = "http://localhost:50063/api/AvgRates"

  constructor(
    private http: HttpClient
  ) { }

  getRates(customerid:number, carrierid:number, originstate:string, destinationstate:string): Observable<Main[]>{
    return this.http.get(`${this.baseurl}/${customerid}/${carrierid}/${originstate}/${destinationstate}`) as Observable<Main[]>;  
  }
}
