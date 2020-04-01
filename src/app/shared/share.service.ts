import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { shoppingform } from '../customer/shopping-form/shopping.module';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class ShareService {

mockurl = 'http://localhost:3000/shoppingform';

currentShoppingform: shoppingform = {
  id: null, 
  FirstName:'', 
  LastName:'',
  Contact: null,
  Address:''

}
  getAllShoppingforms: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  getAllShoppingform():Observable<shoppingform[]>{
    return this.http.get<shoppingform[]>(this.mockurl, headerOption);
  }
}
