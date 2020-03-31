import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer.module';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ShareService {

mockurl = 'http://localhost:3000/Customer';
  constructor(
    private http: HttpClient
  ) { }
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.mockurl, headerOption);
  }
}
