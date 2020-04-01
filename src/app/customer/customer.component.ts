import { Component, OnInit } from '@angular/core';
import { ShareService } from '../shared/share.service';
import { Customer } from './customer.module';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  allCustomer: Customer[];
  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
   
  }

}
